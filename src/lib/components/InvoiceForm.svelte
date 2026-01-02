<script lang="ts">
	import { modifierLibrary } from '../modifierLibrary.js';
	import { priceSuggestionLibrary } from '../priceSuggestionLibrary.js';
	import type { LineItem, Modifier } from '../types.js';
	import { tick } from 'svelte';

	let lineItems: LineItem[] = $state([]);
	let showModifierModal = $state(false);
	let currentLineItemId: string | null = $state(null);
	let customModifierName = $state('');
	let customModifierPrice = $state(0);
	// Track which line items have manually set prices
	let manuallySetPrices = $state(new Set<string>());
	// Invoice calculation parameters
	let costMultiplier = $state(46);
	let requiredMargin = $state(20);
	let commission = $state(5);
	let salesTax = $state(6.25);
	let deliveryFee = $state(500);

	async function addLineItem() {
		const newItem: LineItem = {
			id: crypto.randomUUID(),
			name: '',
			basePrice: 0,
			markupPercent: 30,
			modifiers: []
		};
		lineItems = [...lineItems, newItem];
		await tick();
		// Focus on the name input of the newly added item
		const nameInput = document.querySelector(`input[data-line-item-id="${newItem.id}"][data-input-type="name"]`) as HTMLInputElement;
		if (nameInput) {
			nameInput.focus();
		}
		return newItem.id;
	}

	async function handleLineItemKeydown(event: KeyboardEvent, lineItemId: string, inputType: 'name' | 'price') {
		if (event.key === 'Enter') {
			event.preventDefault();
			const newItemId = await addLineItem();
		}
	}

	function findSuggestion(itemName: string): PriceSuggestion | null {
		const upperName = itemName.toUpperCase().trim();
		if (!upperName) return null;

		// Check if any key in the library matches the start of the item name
		for (const [key, priceSuggestion] of Object.entries(priceSuggestionLibrary)) {
			if (upperName.startsWith(key.toUpperCase())) {
				return priceSuggestion;
			}
		}
		return null;
	}

	function handleNameInput(lineItemId: string, newName: string) {
		const lineItem = lineItems.find((item) => item.id === lineItemId);
		if (!lineItem) return;

		lineItem.name = newName;

		// Only suggest price if user hasn't manually set it
		if (!manuallySetPrices.has(lineItemId)) {
			const suggestion = findSuggestion(newName)
			if (suggestion !== null) {
				lineItem.basePrice = suggestion.price;
				if (suggestion.doorCount > 0) {
					lineItem.modifiers.push({
						id: crypto.randomUUID(),
						name: `Door x ${suggestion.doorCount}`,
						price: suggestion.doorCount * 150, // $150 per door
						isWood: true,
					})
				}
				if (suggestion.drawerCount > 0) {
					lineItem.modifiers.push({
						id: crypto.randomUUID(),
						name: `Drawer x ${suggestion.drawerCount}`,
						price: suggestion.drawerCount * 55, // $55 per drawer
						isWood: true,
					})
					lineItem.modifiers.push({
						id: crypto.randomUUID(),
						name: `Drawer Glides x ${suggestion.drawerCount}`,
						price: suggestion.drawerCount * 104, // $104 per glides
						isWood: false,
					})
				}
			}
		}
		// Trigger reactivity
		lineItems = [...lineItems];
	}

	function handlePriceInput(lineItemId: string, newPrice: number) {
		const lineItem = lineItems.find((item) => item.id === lineItemId);
		if (!lineItem) return;

		lineItem.basePrice = newPrice;
		// Mark this price as manually set
		manuallySetPrices.add(lineItemId);
		lineItems = [...lineItems];
	}

	function removeLineItem(id: string) {
		lineItems = lineItems.filter((item) => item.id !== id);
		manuallySetPrices.delete(id);
	}

	function openModifierModal(lineItemId: string) {
		currentLineItemId = lineItemId;
		showModifierModal = true;
		customModifierName = '';
		customModifierPrice = 0;
	}

	function closeModifierModal() {
		showModifierModal = false;
		currentLineItemId = null;
		customModifierName = '';
		customModifierPrice = 0;
	}

	function addModifierFromLibrary(modifier: Modifier) {
		if (!currentLineItemId) return;

		const lineItem = lineItems.find((item) => item.id === currentLineItemId);
		if (!lineItem) return;

		// Check if modifier already exists
		if (lineItem.modifiers.some((m) => m.id === modifier.id)) {
			return;
		}

		lineItem.modifiers = [...lineItem.modifiers, { ...modifier }];
		lineItems = [...lineItems];
	}

	function addCustomModifier() {
		if (!currentLineItemId || !customModifierName.trim()) return;

		const lineItem = lineItems.find((item) => item.id === currentLineItemId);
		if (!lineItem) return;

		const customModifier: Modifier = {
			id: crypto.randomUUID(),
			name: customModifierName.trim(),
			price: customModifierPrice,
			isCustom: true
		};

		lineItem.modifiers = [...lineItem.modifiers, customModifier];
		lineItems = [...lineItems];
		closeModifierModal();
	}

	function removeModifier(lineItemId: string, modifierId: string) {
		const lineItem = lineItems.find((item) => item.id === lineItemId);
		if (!lineItem) return;

		lineItem.modifiers = lineItem.modifiers.filter((m) => m.id !== modifierId);
		lineItems = [...lineItems];
	}

	function getLineItemTotal(lineItem: LineItem): number {
		const woodPrice = lineItem.basePrice + lineItem.modifiers.reduce((sum, mod) => sum + (mod.isWood ? mod.price : 0), 0);
		const basePriceWithMarkup = woodPrice * (1 + lineItem.markupPercent / 100);
		const nonWoodPrice = lineItem.modifiers.reduce((sum, mod) => sum + (mod.isWood ? 0 : mod.price), 0) || 0;
		return basePriceWithMarkup + nonWoodPrice;
	}

	function getInvoiceSubtotal(): number {
		return lineItems.reduce((sum, item) => sum + getLineItemTotal(item), 0);
	}

	function getAfterCostMultiplier(): number {
		const subtotal = getInvoiceSubtotal();
		return subtotal * (costMultiplier / 100);
	}

	function getAfterMargin(): number {
		const afterCostMultiplier = getAfterCostMultiplier();
		return afterCostMultiplier / (1 - requiredMargin / 100);
	}

	function getAfterCommission(): number {
		const afterMargin = getAfterMargin();
		return afterMargin / (1 - commission / 100);
	}

	function getAfterTax(): number {
		const afterCommission = getAfterCommission();
		return afterCommission * (1 + salesTax / 100);
	}

	function getInvoiceTotal(): number {
		const afterTax = getAfterTax();
		return afterTax + deliveryFee;
	}
</script>

<div class="max-w-6xl mx-auto p-6">
	<div class="mb-6">
		<h1 class="text-3xl font-bold text-gray-900 mb-2">Invoice Builder</h1>
		<p class="text-gray-600">Create line items and add modifiers to build your invoice</p>
	</div>

	<div class="space-y-4 mb-6">
		{#each lineItems as lineItem (lineItem.id)}
			<div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
						<input
							type="text"
							value={lineItem.name}
							oninput={(e) => handleNameInput(lineItem.id, e.currentTarget.value)}
							placeholder="Enter item name"
							data-line-item-id={lineItem.id}
							data-input-type="name"
							onkeydown={(e) => handleLineItemKeydown(e, lineItem.id, 'name')}
							class="w-full text-gray-900 uppercase px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-1">Base Price</label>
						<input
							type="number"
							value={lineItem.basePrice}
							oninput={(e) => handlePriceInput(lineItem.id, parseFloat(e.currentTarget.value) || 0)}
							step="0.01"
							min="0"
							placeholder="0.00"
							data-line-item-id={lineItem.id}
							data-input-type="price"
							onkeydown={(e) => handleLineItemKeydown(e, lineItem.id, 'price')}
							class="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-1">Markup %</label>
						<input
							type="number"
							value={lineItem.markupPercent}
							oninput={(e) => {
								lineItem.markupPercent = parseFloat(e.currentTarget.value) || 0;
								lineItems = [...lineItems];
							}}
							step="0.1"
							min="0"
							placeholder="30"
							class="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div class="flex items-end">
						<button
							type="button"
							onclick={() => openModifierModal(lineItem.id)}
							class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
						>
							+ Add Modifier
						</button>
					</div>
				</div>

				{#if lineItem.modifiers.length > 0}
					<div class="mt-4 pt-4 border-t border-gray-200">
						<h3 class="text-sm font-medium text-gray-700 mb-2">Modifiers:</h3>
						<div class="space-y-2">
							{#each lineItem.modifiers as modifier (modifier.id)}
								<div class="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
									<div class="flex items-center gap-2">
										<span class="text-sm text-gray-900">{modifier.name}</span>
										{#if modifier.isCustom}
											<span
												class="px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 rounded"
											>
												Custom
											</span>
										{/if}
									</div>
									<div class="flex items-center gap-3">
										<span
											class="text-sm font-medium {modifier.price >= 0
												? 'text-gray-900'
												: 'text-red-600'}"
										>
											{modifier.price >= 0 ? '+' : ''}${modifier.price.toFixed(2)}
										</span>
										<button
											type="button"
											onclick={() => removeModifier(lineItem.id, modifier.id)}
											class="text-red-600 hover:text-red-800 focus:outline-none"
											aria-label="Remove modifier"
										>
											<svg
												class="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
					<div class="flex items-center gap-4">
						<span class="text-sm text-gray-600">Line Total:</span>
						<span class="text-lg font-semibold text-gray-900"
							>${getLineItemTotal(lineItem).toFixed(2)}</span
						>
					</div>
					<button
						type="button"
						onclick={() => removeLineItem(lineItem.id)}
						class="px-4 py-2 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
					>
						Remove Item
					</button>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex gap-4 mb-6">
		<button
			type="button"
			onclick={addLineItem}
			class="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
		>
			+ Add Line Item
		</button>
	</div>

	{#if lineItems.length > 0}
		<div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
			<h3 class="text-lg font-semibold text-gray-900 mb-4">Invoice Calculation Parameters</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-1">Cost Multiplier %</label>
					<input
						type="number"
						value={costMultiplier}
						oninput={(e) => {
							costMultiplier = parseFloat(e.currentTarget.value) || 0;
						}}
						step="0.1"
						min="0"
						placeholder="46"
						class="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-1">Required Margin %</label>
					<input
						type="number"
						value={requiredMargin}
						oninput={(e) => {
							requiredMargin = parseFloat(e.currentTarget.value) || 0;
						}}
						step="0.1"
						min="0"
						placeholder="20"
						class="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-1">Commission %</label>
					<input
						type="number"
						value={commission}
						oninput={(e) => {
							commission = parseFloat(e.currentTarget.value) || 0;
						}}
						step="0.1"
						min="0"
						placeholder="5"
						class="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-1">Sales Tax %</label>
					<input
						type="number"
						value={salesTax}
						oninput={(e) => {
							salesTax = parseFloat(e.currentTarget.value) || 0;
						}}
						step="0.01"
						min="0"
						placeholder="6.25"
						class="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-1">Delivery Fee</label>
					<input
						type="number"
						value={deliveryFee}
						oninput={(e) => {
							deliveryFee = parseFloat(e.currentTarget.value) || 0;
						}}
						step="0.01"
						min="0"
						placeholder="500"
						class="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
			</div>
			<div class="border-t border-gray-300 pt-4">
				<h4 class="text-md font-semibold text-gray-900 mb-3">Calculation Breakdown</h4>
				<div class="space-y-2 mb-4">
					<div class="flex items-center justify-between text-sm">
						<span class="text-gray-600">Subtotal (Line Items):</span>
						<span class="font-medium text-gray-900">${getInvoiceSubtotal().toFixed(2)}</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-gray-600">After Cost Multiplier ({costMultiplier}%):</span>
						<span class="font-medium text-red-800">${getAfterCostMultiplier().toFixed(2)}</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-gray-600">After Required Margin ({requiredMargin}%):</span>
						<span class="font-medium text-yellow-800">${getAfterMargin().toFixed(2)}</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-gray-600">After Commission ({commission}%):</span>
						<span class="font-medium text-gray-900">${getAfterCommission().toFixed(2)}</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-gray-600">After Sales Tax ({salesTax}%):</span>
						<span class="font-medium text-gray-900">${getAfterTax().toFixed(2)}</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-gray-600">Delivery Fee:</span>
						<span class="font-medium text-gray-900">${deliveryFee.toFixed(2)}</span>
					</div>
				</div>
				<div class="border-t border-gray-300 pt-3">
					<div class="flex items-center justify-between">
						<span class="text-xl font-semibold text-gray-900">Invoice Total:</span>
						<span class="text-3xl font-bold text-gray-900">${getInvoiceTotal().toFixed(2)}</span>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-xl font-semibold text-gray-900">Profit:</span>
						<span class="text-3xl font-bold text-green-800">${(getAfterMargin() - getAfterCostMultiplier()).toFixed(2)}</span>
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if showModifierModal}
		<div
			class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
			onclick={closeModifierModal}
		>
			<div
				class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
				onclick={(e) => e.stopPropagation()}
			>
				<div class="p-6">
					<div class="flex items-center justify-between mb-6">
						<h2 class="text-2xl font-bold text-gray-900">Add Modifier</h2>
						<button
							type="button"
							onclick={closeModifierModal}
							class="text-gray-400 hover:text-gray-600 focus:outline-none"
							aria-label="Close"
						>
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<div class="mb-6">
						<h3 class="text-lg font-semibold text-gray-900 mb-4">From Library</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
							{#each modifierLibrary as modifier}
								<button
									type="button"
									onclick={() => addModifierFromLibrary(modifier)}
									class="text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
								>
									<div class="flex items-center justify-between">
										<span class="font-medium text-gray-900">{modifier.name}</span>
										<span
											class="text-sm font-semibold {modifier.price >= 0
												? 'text-gray-900'
												: 'text-red-600'}"
										>
											{modifier.price >= 0 ? '+' : ''}${modifier.price.toFixed(2)}
										</span>
									</div>
								</button>
							{/each}
						</div>
					</div>

					<div class="border-t border-gray-200 pt-6">
						<h3 class="text-lg font-semibold text-gray-900 mb-4">Custom Modifier</h3>
						<div class="space-y-4">
							<div>
								<label class="block text-sm font-medium text-gray-700 mb-1"
									>Modifier Name</label
								>
								<input
									type="text"
									bind:value={customModifierName}
									placeholder="Enter custom modifier name"
									class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<label class="block text-sm font-medium text-gray-700 mb-1"
									>Price Adjustment</label
								>
								<input
									type="number"
									bind:value={customModifierPrice}
									step="0.01"
									placeholder="0.00"
									class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
								<p class="mt-1 text-xs text-gray-500">
									Enter a negative value for discounts
								</p>
							</div>
							<button
								type="button"
								onclick={addCustomModifier}
								disabled={!customModifierName.trim()}
								class="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
							>
								Add Custom Modifier
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

