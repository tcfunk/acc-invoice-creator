export interface Modifier {
	id: string;
	name: string;
	price: number;
	isWood?: boolean;
	isCustom?: boolean;
}

export interface LineItem {
	id: string;
	name: string;
	basePrice: number;
	markupPercent: number;
	modifiers: Modifier[];
}

export interface PriceSuggestion {
	price: number;
	doorCount: number;
	drawerCount: number;
}

export interface Invoice {
	lineItems: LineItem[];
}

