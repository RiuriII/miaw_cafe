// src/types/index.ts

export interface Cat {
	id: string;
	name: string;
	breed: string;
	age: string;
	image: string;
	bgClass: string;
	description: string;
	traits: string[];
	forAdoption: boolean;
}

export interface MenuItem {
	name: string;
	description: string;
	price: number;
}

export interface MenuCategory {
	label: string;
	title: string;
	subtitle: string;
	items: MenuItem[];
}

export interface Special {
	icon: string;
	image?: string;
	name: string;
	description: string;
	price: number;
	badge?: string;
}

export interface Testimonial {
	avatar: string;
	text: string;
	name: string;
	location: string;
	rating: number;
}

export interface Feature {
	icon: string;
	title: string;
	description: string;
}

export interface Stat {
	number: string;
	label: string;
}
