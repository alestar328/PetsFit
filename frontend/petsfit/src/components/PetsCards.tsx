import React from 'react';
import cat1 from '../assets/cat_card.png';
import cat2 from '../assets/cat_card2.png';
import dog from '../assets/dog_card.png';
import dog2 from '../assets/dog_card2.png';

interface MenuItem {
    id: number;
    title: string;
    image: string;
    alt: string;
}

const PetsCards: React.FC = () => {
    // Datos de los menús
    const menuItems: MenuItem[] = [
        {
            id: 1,
            title: "Menú de Pollo",
            image: cat1,
            alt: "Perro beagle comiendo menú de pollo"
        },
        {
            id: 2,
            title: "Menú de Salmón",
            image: dog,
            alt: "Gato comiendo menú de salmón"
        },
        {
            id: 3,
            title: "Menú de Pavo",
            image: cat2,
            alt: "Gato naranja comiendo menú de pavo"
        },
        {
            id: 4,
            title: "Menú de Buey",
            image: dog2,
            alt: "Perro comiendo menú de buey"
        }
    ];

    return (
        <section className="pt-0 pb-16 px-8 bg-[#f5f1e8]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
               
                    <div className="mb-8">
                        <p className="text-orange-500 font-medium mb-2 text-lg">
                            ¡Tu bebé ya está moviendo la cola!
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a3728] leading-tight">
                            Descubre nuestras recetas naturales
                        </h2>
                    </div>
                </div>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {menuItems.map((item) => (
                        <div 
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Header amarillo */}
                            <div className="bg-yellow-300 px-4 py-3">
                                <h3 className="font-bold text-[#4a3728] text-lg text-center">
                                    {item.title}
                                </h3>
                            </div>
                            
                            {/* Imagen */}
                            <div className="h-100 overflow-hidden">
                                <img 
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón CTA */}
                <div className="text-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                        Crea su plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PetsCards;