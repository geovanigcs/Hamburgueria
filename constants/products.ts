export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients: string[];
  category: string;
}

// Combos / Lançamentos
export const COMBOS: Omit<Product, "id">[] = [
  {
    name: "McOferta Média Big Gigio Duplo",
    description:
      "Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim, acompanhamento e bebida.",
    price: 39.9,
    imageUrl: "/McOferta Média Big Mac Duplo.png",
    category: "Lançamentos",
    ingredients: [
      "Quatro hambúrgueres de carne bovina 100%",
      "Alface americana",
      "Queijo processado sabor cheddar",
      "Molho especial",
      "Cebola",
      "Picles",
      "Pão com gergilim",
    ],
  },
  {
    name: "Novo Brabo Melt Onion Rings",
    description:
      "Dois hambúrgueres de carne 100% bovina, méquinese, a exclusiva maionese especial com sabor de carne defumada, onion rings, fatias de bacon, queijo processado sabor cheddar, o delicioso molho lácteo com queijo tipo cheddar tudo isso no pão tipo brioche trazendo uma explosão de sabores pros seus dias de glória! Acompanhamento e Bebida.",
    price: 41.5,
    imageUrl: "/Novo Brabo Melt Onion Rings.png",
    category: "Lançamentos",
    ingredients: [
      "Pão tipo brioche",
      "Dois hambúrgueres de carne 100% bovina",
      "Méquinese",
      "Maionese especial com sabor de carne defumada",
      "Onion rings",
      "Fatias de bacon",
      "Queijo processado sabor cheddar",
      "Molho lácteo com queijo tipo cheddar",
    ],
  },
  {
    name: "McCrispy Chicken Elite",
    description:
      "Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, queijo sabor cheddar e carne 100% de peito de frango, temperada e empanada, acompanhamento e bebida.",
    price: 39.9,
    imageUrl: "/McCrispy Chicken Elite.png",
    category: "Lançamentos",
    ingredients: [
      "Pão tipo brioche",
      "Batata",
      "Molho Honey&Fire",
      "Bacon em fatias",
      "Alface",
      "Tomate",
      "Queijo sabor cheddar",
      "Carne 100% de peito de frango",
    ],
  },
  {
    name: "Duplo Cheddar McMelt",
    description:
      "Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim, acompanhamento e bebida.",
    price: 36.2,
    imageUrl: "/Duplo Cheddar McMelt.png",
    category: "Lançamentos",
    ingredients: [
      "Pão escuro com gergelim",
      "Dois hambúrgueres de carne 100% bovina",
      "Molho lácteo com queijo tipo cheddar",
      "Cebola ao molho shoyu",
    ],
  },
];

// Lanches
export const LANCHES: Omit<Product, "id">[] = [
  {
    name: "Big Gigio",
    description:
      "Dois hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim.",
    price: 28.9,
    imageUrl: "/combo1.png",
    category: "Lanches",
    ingredients: [
      "Pão com gergilim",
      "Dois hambúrgueres de carne 100% bovina",
      "Alface americana",
      "Queijo fatiado sabor cheddar",
      "Molho especial",
      "Cebola",
      "Picles",
    ],
  },
  {
    name: "Duplo Quarterão",
    description:
      "Dois hambúrgueres de carne 100% bovina, queijo processado sabor cheddar, bacon crocante, cebola, picles, ketchup e mostarda no pão com gergelim.",
    price: 32.9,
    imageUrl: "/combo2.png",
    category: "Lanches",
    ingredients: [
      "Pão com gergilim",
      "Dois hambúrgueres de carne 100% bovina",
      "Queijo processado sabor cheddar",
      "Bacon crocante",
      "Cebola",
      "Picles",
      "Ketchup",
      "Mostarda",
    ],
  },
  {
    name: "Gigio Melt",
    description:
      "Hambúrguer de carne 100% bovina, molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim.",
    price: 24.9,
    imageUrl: "/combo3.png",
    category: "Lanches",
    ingredients: [
      "Pão escuro com gergelim",
      "Hambúrguer de carne 100% bovina",
      "Molho lácteo com queijo tipo cheddar",
      "Cebola ao molho shoyu",
    ],
  },
  {
    name: "Gigio Bacon",
    description:
      "Hambúrguer de carne 100% bovina, bacon crocante, queijo fatiado sabor cheddar, alface, tomate, cebola e molho especial no pão com gergelim.",
    price: 26.9,
    imageUrl: "/combo4.png",
    category: "Lanches",
    ingredients: [
      "Pão com gergelim",
      "Hambúrguer de carne 100% bovina",
      "Bacon crocante",
      "Queijo fatiado sabor cheddar",
      "Alface",
      "Tomate",
      "Cebola",
      "Molho especial",
    ],
  },
  {
    name: "Chicken Supreme",
    description:
      "Peito de frango empanado, alface, tomate, maionese especial no pão tipo brioche.",
    price: 23.9,
    imageUrl: "/combo1.png",
    category: "Lanches",
    ingredients: [
      "Pão tipo brioche",
      "Peito de frango empanado",
      "Alface",
      "Tomate",
      "Maionese especial",
    ],
  },
];

// Fritas
export const FRITAS: Omit<Product, "id">[] = [
  {
    name: "Fritas Grande",
    description: "Batatas fritas crocantes e sequinhas. Vem bastante!",
    price: 10.9,
    imageUrl: "/Fritas.png",
    category: "Fritas",
    ingredients: ["Batatas fritas", "Sal"],
  },
  {
    name: "Fritas Média",
    description: "Batatas fritas crocantes e sequinhas. Vem uma média quantidade!",
    price: 8.9,
    imageUrl: "/Fritas-1.png",
    category: "Fritas",
    ingredients: ["Batatas fritas", "Sal"],
  },
  {
    name: "Fritas Pequena",
    description:
      "Batatas fritas crocantes e sequinhas. Vem pouquinho (é bom pra sua dieta)!",
    price: 6.9,
    imageUrl: "/batatas 1.png",
    category: "Fritas",
    ingredients: ["Batatas fritas", "Sal"],
  },
  {
    name: "Fritas com Cheddar",
    description: "Batatas fritas cobertas com delicioso molho cheddar cremoso.",
    price: 14.9,
    imageUrl: "/Fritas.png",
    category: "Fritas",
    ingredients: ["Batatas fritas", "Molho cheddar", "Bacon bits"],
  },
  {
    name: "Fritas Supreme",
    description:
      "Batatas fritas com cheddar, bacon, cebola caramelizada e molho especial.",
    price: 18.9,
    imageUrl: "/Fritas-1.png",
    category: "Fritas",
    ingredients: [
      "Batatas fritas",
      "Molho cheddar",
      "Bacon crocante",
      "Cebola caramelizada",
      "Molho especial",
    ],
  },
];

// Bebidas
export const BEBIDAS: Omit<Product, "id">[] = [
  {
    name: "Coca-Cola 2L",
    description: "Coca-cola gelada para acompanhar seu lanche.",
    price: 8.9,
    imageUrl: "/coca-cola.jpeg",
    category: "Bebidas",
    ingredients: [],
  },
  {
    name: "Pepsi 2,5L",
    description: "Pepsi gelada para refrescar seu dia.",
    price: 7.9,
    imageUrl: "/pepsi.jpeg",
    category: "Bebidas",
    ingredients: [],
  },
  {
    name: "Guaraná Antarctica 2L",
    description: "O sabor original do Brasil.",
    price: 8.9,
    imageUrl: "/guaraná.jpg",
    category: "Bebidas",
    ingredients: [],
  },
  {
    name: "Sprite 2L",
    description: "Sprite gelada e refrescante.",
    price: 8.9,
    imageUrl: "/sprit.jpeg",
    category: "Bebidas",
    ingredients: [],
  },
  {
    name: "Schweppes Citrus",
    description: "Refrescante bebida cítrica.",
    price: 7.5,
    imageUrl: "/schweppes.jpeg",
    category: "Bebidas",
    ingredients: [],
  },
  {
    name: "Suco de Laranja Natural",
    description: "Suco de laranja 100% natural.",
    price: 12.9,
    imageUrl: "/sucodelaranja.jpeg",
    category: "Bebidas",
    ingredients: ["Laranja", "Água"],
  },
];

// Sobremesas
export const SOBREMESAS: Omit<Product, "id">[] = [
  {
    name: "Torta de Maçã",
    description: "Torta de maçã quentinha e crocante com calda de caramelo.",
    price: 12.9,
    imageUrl: "/tortademaca.jpg",
    category: "Sobremesas",
    ingredients: ["Massa folhada", "Maçãs", "Canela", "Açúcar", "Calda de caramelo"],
  },
  {
    name: "Sundae de Chocolate",
    description: "Sorvete de baunilha com calda de chocolate e chantilly.",
    price: 11.9,
    imageUrl: "/sundaechocolate.jpeg",
    category: "Sobremesas",
    ingredients: [
      "Sorvete de baunilha",
      "Calda de chocolate",
      "Chantilly",
      "Granulado",
    ],
  },
  {
    name: "Sundae de Morango",
    description: "Sorvete de baunilha com calda de morango e chantilly.",
    price: 11.9,
    imageUrl: "/sundaemorango.jpeg",
    category: "Sobremesas",
    ingredients: [
      "Sorvete de baunilha",
      "Calda de morango",
      "Chantilly",
      "Morangos frescos",
    ],
  },
  {
    name: "Casquinha de Baunilha",
    description: "Casquinha de sorvete sabor baunilha.",
    price: 4.9,
    imageUrl: "/sorvetes.png",
    category: "Sobremesas",
    ingredients: ["Sorvete de baunilha", "Casquinha crocante"],
  },
  {
    name: "Casquinha de Chocolate",
    description: "Casquinha de sorvete sabor chocolate.",
    price: 4.9,
    imageUrl: "/sorvetinho.png",
    category: "Sobremesas",
    ingredients: ["Sorvete de chocolate", "Casquinha crocante"],
  },
  {
    name: "Casquinha Mista",
    description: "Casquinha de sorvete sabor baunilha e chocolate.",
    price: 5.9,
    imageUrl: "/sorvetes_sandubas.png",
    category: "Sobremesas",
    ingredients: [
      "Sorvete de baunilha",
      "Sorvete de chocolate",
      "Casquinha crocante",
    ],
  },
];

// Exports consolidados
export const ALL_PRODUCTS = {
  combos: COMBOS,
  lanches: LANCHES,
  fritas: FRITAS,
  bebidas: BEBIDAS,
  sobremesas: SOBREMESAS,
};

export const CATEGORIES = [
  { id: "combos", name: "Lançamentos", products: COMBOS },
  { id: "lanches", name: "Lanches", products: LANCHES },
  { id: "fritas", name: "Fritas", products: FRITAS },
  { id: "bebidas", name: "Bebidas", products: BEBIDAS },
  { id: "sobremesas", name: "Sobremesas", products: SOBREMESAS },
];
