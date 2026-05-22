// src/data/index.ts
import type { Cat, Feature, MenuCategory, Special, Stat, Testimonial } from "../types";

export const CATS: Cat[] = [
	{
		id: "biscoito",
		name: "Biscoito",
		breed: "Vira-Lata Caramelado",
		age: "2 anos",
		image: "https://v0c70v61jf.ufs.sh/f/KJL4pCDRCwYT1AplzNUE0sO6bDvgizAyPuxeYNj3owTC4Zcp",
		bgClass: "bg-terra",
		description:
			"Curioso, adora sentar no seu colo enquanto você toma café. Especialista em derrubar canecas e ganhar corações.",
		traits: ["Brincalhão", "Sociável", "Mansa"],
		forAdoption: true,
	},
	{
		id: "nuvem",
		name: "Nuvem",
		breed: "Angora Branca",
		age: "4 anos",
		image: "https://v0c70v61jf.ufs.sh/f/KJL4pCDRCwYTWwO4e8ViJYSvOwI6hM82Lu0mCsy5Gac3N1gK",
		bgClass: "bg-sage",
		description:
			"A diva do café. Exige atenção constante mas paga com ronronares que fazem qualquer stress desaparecer.",
		traits: ["Carinhosa", "Elegante", "Quietinha"],
		forAdoption: false,
	},
	{
		id: "capuccino",
		name: "Capuccino",
		breed: "Misto Marrom",
		image: "https://v0c70v61jf.ufs.sh/f/KJL4pCDRCwYTKzyA2RDRCwYT4PmdFU8osBLlf3NZAySOkcbD",
		age: "1 ano",
		bgClass: "bg-brown",
		description:
			"O mais novo da família. Ainda aprendendo a ser gato mas já mestre em roubar pedaços de bolo.",
		traits: ["Filhote", "Agitado", "Guloso"],
		forAdoption: true,
	},
];

export const MENU: MenuCategory = {
	label: "Bebidas Especiais",
	title: "Café de\nOrigem",
	subtitle: "Grãos selecionados, torrados localmente na Lapa.",
	items: [
		{
			name: "Espresso do Miaw",
			description: "Duplo, com crema perfeita e blend exclusivo",
			price: 9,
		},
		{
			name: "Latte de Lavanda",
			description: "Leite vaporizado com lavanda orgânica da Serra Gaúcha",
			price: 18,
		},
		{
			name: "Cold Brew 24h",
			description: "Extração a frio por 24 horas, suave e encorpado",
			price: 16,
		},
		{
			name: "Matcha com Oat Milk",
			description: "Matcha cerimônial japonês com leite de aveia barista",
			price: 20,
		},
		{
			name: "Cappuccino de Canela",
			description: "Espresso, leite microfoamy e canela do Ceilão",
			price: 15,
		},
		{
			name: "Chá Chai Artesanal",
			description: "Blend de especiarias, cardamomo e gengibre fresco",
			price: 17,
		},
	],
};

export const SPECIALS: Special[] = [
	{
		icon: "🧁",
		image: "https://v0c70v61jf.ufs.sh/f/KJL4pCDRCwYT3EAnqQwZ2oOaN7k5zFU1hYEtypfmn4GIjQHe",
		name: "Cupcake da Nuvem",
		description: "Baunilha bourbon, cream cheese e decoração de patinha feita à mão.",
		price: 18,
		badge: "Novo",
	},
	{
		icon: "🥐",
		image: "https://v0c70v61jf.ufs.sh/f/KJL4pCDRCwYT1sF2VQE0sO6bDvgizAyPuxeYNj3owTC4ZcpI",
		name: "Croissant Artesanal",
		description: "Manteiga francesa, 72h de fermentação. Laminado na hora.",
		price: 14,
	},
	{
		icon: "🍰",
		image: "https://v0c70v61jf.ufs.sh/f/KJL4pCDRCwYTfOJPSHZ4TS9VRp8dbuWwBs5LQyv7fZnkHX6F",
		name: "Cheesecake de Maracujá",
		description: "Base de biscoito amanteigado, recheio cremoso e coulis de maracujá.",
		price: 22,
		badge: "Favorito",
	},
	{
		icon: "🥞",
		image: "https://v0c70v61jf.ufs.sh/f/KJL4pCDRCwYTLOie1QpelVxnjdquvTDiF9OzKpcr7XZB5aA2",
		name: "Panquecas Japonesas",
		description: "Soufflé fofinho com maple e frutas vermelhas frescas.",
		price: 26,
	},
];

export const TESTIMONIALS: Testimonial[] = [
	{
		avatar: "🧔",
		text: "Vim uma vez e virei frequentador semanal. Os gatos são terapêuticos demais, o café é incrível e o ambiente tem uma vibe que não existe em lugar nenhum de SP.",
		name: "Rafael Mendes",
		location: "Vila Madalena, SP",
		rating: 5,
	},
	{
		avatar: "👩",
		text: "Adotei a Nuvem aqui há dois anos. Hoje ela ronrona todo dia na minha janela. Sou eternamente grata ao Miaw Café por essa missão linda que eles têm.",
		name: "Camila Souza",
		location: "Pinheiros, SP",
		rating: 5,
	},
	{
		avatar: "👩‍💻",
		text: "O cheesecake de maracujá é o melhor que já provei. E o Biscoito ficou no meu colo a visita toda. Perfeito para trabalhar remotamente numa tarde relaxante.",
		name: "Beatriz Lima",
		location: "Jardins, SP",
		rating: 5,
	},
];

export const FEATURES: Feature[] = [
	{
		icon: "♿",
		title: "Acessível",
		description: "Espaço 100% acessível com rampas, banheiro adaptado e sinalização em braille.",
	},
	{
		icon: "📶",
		title: "Wi-Fi Giga",
		description: "Internet fibra óptica de 1GB para trabalho remoto e chamadas de vídeo.",
	},
	{
		icon: "🎵",
		title: "Trilha Sonora",
		description: "Playlists curadas semanalmente. Jazz, lo-fi e MPB em volume confortável.",
	},
	{
		icon: "🌱",
		title: "Sustentável",
		description: "Zero desperdício, embalagens compostáveis e energia solar renovável.",
	},
];

export const STATS: Stat[] = [
	{ number: "12", label: "Gatos Residentes" },
	{ number: "300+", label: "Adoções Realizadas" },
	{ number: "4.9★", label: "Avaliação Média" },
];

export const TICKER_ITEMS = [
	"☕ Café Especial",
	"🐾 Adote com Amor",
	"🌿 Ambiente Artesanal",
	"✦ Experiência Única",
	"☕ Café de Origem",
	"🐾 12 Gatos Residentes",
	"🌿 São Paulo — SP",
	"✦ Reservas Abertas",
];

export const NAV_LINKS = [
	{ href: "#sobre", label: "Sobre" },
	{ href: "#gatos", label: "Os Gatos" },
	{ href: "#cardapio", label: "Cardápio" },
	{ href: "#experiencia", label: "Espaço" },
	{ href: "#depoimentos", label: "Depoimentos" },
];
