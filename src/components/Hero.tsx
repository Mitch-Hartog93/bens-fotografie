import React, { useState, useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg',
  'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg',
  'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
  'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg'
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setIsLoaded(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsLoaded(true);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter">
          <span className="block transform transition-transform duration-700 translate-y-0 opacity-100">
            Momenten Vastleggen
          </span>
          <span className="block transform transition-transform duration-700 delay-300 translate-y-0 opacity-100">
            Herinneringen Creëren
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
          Kijk gerust rond in de verschillende landen waar ik geweest ben. Elk land heeft zijn eigen unieke en prachtige vogels, landschappen en dieren
        </p>
        <a 
          href="#gallery" 
          className="px-8 py-3 text-lg font-medium text-white bg-black bg-opacity-50 hover:bg-opacity-70 border border-white transition-all duration-300 rounded-md hover:scale-105"
        >
          Bekijk Galerij
        </a>
      </div>
      
      {/* Image Navigation Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsLoaded(false);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsLoaded(true);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
            } transition-all duration-300`}
            aria-label={`Ga naar dia ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;