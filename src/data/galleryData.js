const img = (filename) => `${import.meta.env.BASE_URL}assets/img/${filename}`;

export const galleryImages = [
  {
    id: 1,
    url: img('moments_1.jpg'),
    alt: "MOMENTOS BERLÍN'S"
  },
  {
    id: 2,
    url: img('moments_2.jpg'),
    alt: "EVENTOS Y CELEBRACIONES"
  },
  {
    id: 3,
    url: img('moments_3.jpg'),
    alt: "VIBE AUTÉNTICO"
  },
  {
    id: 4,
    url: img('moments_4.jpg'),
    alt: "COMIDA REAL"
  },
  {
    id: 5,
    url: img('moments_5.jpg'),
    alt: "CERVEZA ALEMANA"
  },
  {
    id: 6,
    url: img('DSC_0220.jpg'),
    alt: "PLATILLOS UNDERGROUND"
  }
];
