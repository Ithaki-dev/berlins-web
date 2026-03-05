const img = (filename) => `${import.meta.env.BASE_URL}assets/img/${filename}`;

export const menuItems = [
  {
    id: 1,
    name: "Schnitzel de Cerdo",
    description: "Tradicional escalope empanizado, servido con puré de papa y ensalada fresca",
    price: "$285",
    category: "Plato Principal",
    image: img('Schnitzel_cerdo.jpg')
  },
  {
    id: 2,
    name: "Bratwurst Alemán",
    description: "Salchicha artesanal con chucrut fermentado y mostaza de grano",
    price: "$195",
    category: "Plato Principal",
    image: img('Bratwurst.jpg')
  },
  {
    id: 3,
    name: "Pretzel Artesanal",
    description: "Horneado al momento, con mantequilla de hierbas y sal marina",
    price: "$125",
    category: "Entrada",
    image: img('Pretzel.jpg')
  },
  {
    id: 4,
    name: "Strudel de Manzana",
    description: "Masa hojaldrada rellena de manzanas caramelizadas, servido con helado de vainilla",
    price: "$145",
    category: "Postre",
    image: img('Strudel_manzana.jpg')
  },
  {
    id: 5,
    name: "Cerveza Alemana",
    description: "Selección de cervezas importadas directamente de Baviera",
    price: "$85",
    category: "Bebida",
    image: img('Alus-1.png')
  },
  {
    id: 6,
    name: "Spätzle Gratinado",
    description: "Pasta alemana tradicional con queso emmental y cebolla caramelizada",
    price: "$215",
    category: "Plato Principal",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop"
  }
];

