import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://i.imgur.com/ao5eMAr.jpeg"
                alt="Professionele fotograaf"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-gray-600 dark:text-gray-300">Jaar Ervaring</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Over Mij</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Ik ben een professionele fotograaf met een passie voor het vastleggen van zowel de schoonheid in natuurlijke landschappen als menselijke emoties. 
              Met meer dan tien jaar ervaring heb ik een unieke stijl ontwikkeld die artistieke visie combineert met technische precisie.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Mijn reis begon met een simpele liefde voor het vastleggen van momenten. Vandaag de dag ben ik gespecialiseerd in portret-, landschaps- en 
              stedelijke fotografie, waarbij ik constant de creatieve grenzen verleg om uitzonderlijke visuele verhalen te leveren voor mijn klanten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;