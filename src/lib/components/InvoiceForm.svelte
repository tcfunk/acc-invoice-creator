<script lang="ts">
	import { modifierLibrary } from '../modifierLibrary.js';
	import type { LineItem, Modifier } from '../types.js';

	let lineItems: LineItem[] = $state([]);
	let showModifierModal = $state(false);
	let currentLineItemId: string | null = $state(null);
	let customModifierName = $state('');
	let customModifierPrice = $state(0);

	function addLineItem() {
		const newItem: LineItem = {
			id: crypto.randomUUID(),
			name: '',
			basePrice: 0,
			modifiers: []
		};
		lineItems = [...lineItems, newItem];
	}

	function removeLineItem(id: string) {
		lineItems = lineItems.filter((item) => item.id !== id);
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
		const modifiersTotal = lineItem.modifiers.reduce((sum, mod) => sum + mod.price, 0);
		return lineItem.basePrice + modifiersTotal;
	}

	function getInvoiceTotal(): number {
		return lineItems.reduce((sum, item) => sum + getLineItemTotal(item), 0);
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
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
						<input
							type="text"
							bind:value={lineItem.name}
							placeholder="Enter item name"
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-1">Base Price</label>
						<input
							type="number"
							bind:value={lineItem.basePrice}
							step="0.01"
							min="0"
							placeholder="0.00"
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
		<div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
			<div class="flex items-center justify-between">
				<span class="text-xl font-semibold text-gray-900">Invoice Total:</span>
				<span class="text-3xl font-bold text-gray-900">${getInvoiceTotal().toFixed(2)}</span>
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

