import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GalleryImage, galleryImages } from '../data/gallery-data';

const GalleryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const getCategoryName = (cat: string | undefined) => {
    switch(cat) {
      case 'costa-rica':
        return 'Costa Rica';
      case 'colombia':
        return 'Colombia';
      case 'canada':
        return 'Canada';
      case 'netherlands':
        return 'Nederland';
      default:
        return cat;
    }
  };

  useEffect(() => {
    const filteredImages = category
      ? galleryImages.filter(image => image.category === category)
      : galleryImages;
      
    setImages(filteredImages);
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center font-serif">
          Galerij {getCategoryName(category)}
        </h1>
        
        {images.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Geen afbeeldingen gevonden voor deze categorie.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white font-serif mb-2">{image.title}</h3>
                      <p className="text-gray-200 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
    </div>
  );
};

export default GalleryPage;