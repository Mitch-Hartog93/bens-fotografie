export interface GalleryImage {
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    title: "Arenal Volcano",
    category: "costa-rica",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    description: "Majestic view of the Arenal Volcano in Costa Rica"
  },
  {
    title: "Monteverde Cloud Forest",
    category: "costa-rica",
    image: "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg",
    description: "Misty trails through the Monteverde Cloud Forest"
  },
  {
    title: "Cartagena",
    category: "colombia",
    image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
    description: "Colorful streets of Cartagena's old town"
  },
  {
    title: "Banff National Park",
    category: "canada",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    description: "Beautiful mountain lake in Banff National Park"
  },
  {
    title: "Amsterdam Canals",
    category: "netherlands",
    image: "https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg",
    description: "Historic canals of Amsterdam"
  }
];