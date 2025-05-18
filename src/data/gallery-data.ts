export interface GalleryImage {
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  // Costa Rica
  {
    title: "Two Birds",
    category: "costa-rica",
    image: "/images/uploads/img_0350.jpeg",
    description: "Costa Rica Forest"
  },
  {
    title: "Costa Rica Strand",
    category: "costa-rica",
    image: "https://i.imgur.com/0yHczdq.jpeg",
    description: "Ongerept tropisch strand aan de kust van Costa Rica"
  },
  {
    title: "Costa Rica Wildlife",
    category: "costa-rica",
    image: "https://i.imgur.com/a9YxhzW.jpeg",
    description: "De rijke biodiversiteit van Costa Rica's wildlife"
  },

  // Colombia
  {
    title: "Cartagena",
    category: "colombia",
    image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
    description: "Kleurrijke straten van het oude centrum van Cartagena"
  },
  {
    title: "Medellín",
    category: "colombia",
    image: "https://images.pexels.com/photos/7245464/pexels-photo-7245464.jpeg",
    description: "Modern stadsgezicht van Medellín"
  },
  {
    title: "Valle de Cocora",
    category: "colombia",
    image: "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg",
    description: "Iconische waspalmen in de Cocora Vallei"
  },

  // Canada
  {
    title: "Banff National Park",
    category: "canada",
    image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
    description: "Prachtig bergmeer in Banff National Park"
  },
  {
    title: "Moraine Lake",
    category: "canada",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    description: "Turquoise water van Moraine Lake"
  },
  {
    title: "Jasper National Park",
    category: "canada",
    image: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg",
    description: "Majestueuze bergen van Jasper National Park"
  },

  // Netherlands
  {
    title: "Amsterdamse Grachten",
    category: "netherlands",
    image: "https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg",
    description: "Historische grachten van Amsterdam"
  },
  {
    title: "Kinderdijk Molens",
    category: "netherlands",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
    description: "Traditionele windmolens bij Kinderdijk"
  },
  {
    title: "Tulpenvelden",
    category: "netherlands",
    image: "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg",
    description: "Kleurrijke tulpenvelden in de lente"
  }
];