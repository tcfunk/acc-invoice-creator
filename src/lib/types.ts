export interface Modifier {
	id: string;
	name: string;
	price: number;
	isCustom?: boolean;
}

export interface LineItem {
	id: string;
	name: string;
	basePrice: number;
	markupPercent: number;
	modifiers: Modifier[];
}

export interface Invoice {
	lineItems: LineItem[];
}

