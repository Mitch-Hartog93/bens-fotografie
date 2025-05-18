import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  style?: React.CSSProperties;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://i.imgur.com/F9qBB4Y.jpg',
    alt: 'Costa Rica regenwoud',
    category: 'costa-rica'
  },
  {
    id: 2,
    src: 'https://i.imgur.com/a9YxhzW.jpeg',
    alt: 'Costa Rica wildlife',
    category: 'costa-rica',
    style: { objectPosition: '0 26%' }
  },
  {
    id: 3,
    src: 'https://i.imgur.com/0yHczdq.jpeg',
    alt: 'Costa Rica vogel',
    category: 'costa-rica',
    style: { objectPosition: '0 15%' }
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg',
    alt: 'Colombiaanse straat',
    category: 'colombia'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg',
    alt: 'Colombiaans landschap',
    category: 'colombia'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg',
    alt: 'Colombiaanse cultuur',
    category: 'colombia'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    alt: 'Canadese bergen',
    category: 'canada'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    alt: 'Canadees meer',
    category: 'canada'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg',
    alt: 'Canadees bos',
    category: 'canada'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg',
    alt: 'Nederlandse molens',
    category: 'netherlands'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg',
    alt: 'Amsterdamse grachten',
    category: 'netherlands'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg',
    alt: 'Nederlands platteland',
    category: 'netherlands'
  }
];

const categories = ['costa-rica', 'colombia', 'canada', 'netherlands'];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('costa-rica');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = galleryImages.filter(image => image.category === selectedCategory).slice(0, 3);

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'costa-rica':
        return 'Costa Rica';
      case 'colombia':
        return 'Colombia';
      case 'canada':
        return 'Canada';
      case 'netherlands':
        return 'Nederland';
      default:
        return category;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Galerij</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ontdek mijn fotografische reis door verschillende landen en culturen.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative pb-[66.66%] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  style={image.style}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href={`/gallery/${selectedCategory}`} 
            className="inline-block px-6 py-3 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
          >
            Bekijk alle foto's
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain"
              style={selectedImage.style}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;