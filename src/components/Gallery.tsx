import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/gallery-data';

const categories = ['costa-rica', 'colombia', 'canada', 'netherlands'];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('costa-rica');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Only show first 3 images as preview
  const previewImages = galleryImages
    .filter(image => image.category === selectedCategory)
    .slice(0, 3);

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
          <h2 className="text-4xl font-bold mb-4 font-serif">Galerij Preview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Een voorproefje van mijn fotografische reis. Klik op "Bekijk volledige galerij" om alle foto's te zien.
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

        {/* Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative pb-[66.66%] overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold font-serif">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to={`/gallery/${selectedCategory}`}
            className="inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-lg font-medium"
          >
            Bekijk volledige galerij
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
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
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-semibold text-white font-serif mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
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