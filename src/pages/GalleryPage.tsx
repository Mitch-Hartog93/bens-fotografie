import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface GalleryImage {
  title: string;
  category: string;
  image: string;
  description: string;
}

const GalleryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch the content from the content/gallery directory
        const response = await fetch('/content/gallery/index.json');
        if (!response.ok) {
          throw new Error('Failed to fetch gallery images');
        }
        
        const data = await response.json();
        
        // Filter images by category if provided
        const filteredImages = category
          ? data.filter((image: GalleryImage) => image.category === category)
          : data;
          
        setImages(filteredImages);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Er is een fout opgetreden bij het laden van de afbeeldingen.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-900 dark:border-white border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-12 py-12">
          <div className="text-center text-red-600 dark:text-red-400">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-12 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center font-serif">
          Galerij {getCategoryName(category)}
        </h1>
        
        {images.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Geen afbeeldingen gevonden voor deze categorie.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative pb-[66.67%]">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-serif">{image.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;