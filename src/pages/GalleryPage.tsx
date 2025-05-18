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
    // In een echte applicatie zou dit data ophalen van je Netlify CMS content
    // Voor nu gebruiken we voorbeelddata
    setImages([
      {
        title: "Voorbeeld Foto 1",
        category: category || "",
        image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
        description: "Voorbeeld beschrijving"
      },
      // Voeg meer voorbeeldfoto's toe indien nodig
    ]);
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-12 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center capitalize">
          Galerij {getCategoryName(category)}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={image.image} 
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;