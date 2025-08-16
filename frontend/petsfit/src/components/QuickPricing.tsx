import React, { CSSProperties } from 'react';

import cat from '../assets/price_cat.png';
import cat2 from '../assets/price_cat2.png';
import dog from '../assets/price_dog.png';
import dog2 from '../assets/price_dog2.png';

interface PricingPlan {
    id: number;
    size: string;
    originalPrice: string;
    currentPrice: string;
    image: string;
    alt: string;
    badge: string | null;
    badgeColor: string;
    imageStyle: CSSProperties;
}

const QuickPricing: React.FC = () => {
    // Datos de los planes de precios
    const pricingPlans: PricingPlan[] = [
        {
            id: 1,
            size: "Minis 0-2 kg",
            originalPrice: "1,49",
            currentPrice: "4.90",
            image: dog,
            alt: "Perro mini chihuahua",
            badge: "YUMM YAMMY",
            badgeColor: "bg-orange-500",
            imageStyle: { transform: 'scale(0.7)' }
        },
        {
            id: 2,
            size: "Pequeños 3-9 kg",
            originalPrice: "7.90",
            currentPrice: "6.90",
            image: cat,
            alt: "Perro pequeño bulldog francés",
            badge: null,
            badgeColor: "",
            imageStyle: { transform: 'scale(0.8)' }
        },
        {
            id: 3,
            size: "Medianos 10-25 kg",
            originalPrice: "10.80",
            currentPrice: "8.56",
            image: cat2,
            alt: "Perro mediano pastor australiano",
            badge: null,
            badgeColor: "",
            imageStyle: { transform: 'scale(0.9)' }
        },
        {
            id: 4,
            size: "Grandes +25 kg",
            originalPrice: "12.50",
            currentPrice: "9.99",
            image: dog2,
            alt: "Perro grande san bernardo",
            badge: null,
            badgeColor: "",
            imageStyle: { transform: 'scale(1.1)' }
        }
    ];

    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Título principal */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a3728] leading-tight mb-2">
                        Menús hechos a su medida
                    </h2>
                    <p className="text-2xl md:text-3xl font-serif font-bold text-[#6b4c3a]">
                        y el precio hecho a la tuya
                    </p>
                </div>

                {/* Grid de planes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.id}
                            className="text-center relative hover:scale-105 transition-transform duration-300"
                        >
                            {/* Badge YUMM YAMMY */}
                            {plan.badge && (
                                <div className="absolute -top-2 -left-2 z-10">
                                    <div className={`${plan.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-12 shadow-lg`}>
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            {/* Imagen del perro */}
                            <div className="mb-6 relative">
                                <div className="relative h-64 flex items-center justify-center overflow-visible">
                                    <img 
                                        src={plan.image}
                                        alt={plan.alt}
                                        style={plan.imageStyle}
                                        className="w-[80%] max-h-[110%] object-contain transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Información del plan */}
                            <div className="space-y-2">
                                {/* Categoría del perro */}
                                <h3 className="font-bold text-[#4a3728] text-lg">
                                    {plan.size}
                                </h3>

                                {/* Precio original tachado */}
                                <p className="text-gray-500 text-sm">
                                    Desde <span className="line-through">{plan.originalPrice} €/día</span>
                                </p>

                                {/* Precio actual grande */}
                                <div className="text-3xl font-bold text-[#4a3728]">
                                    {plan.currentPrice} S/.
                                    <span className="text-sm font-normal text-gray-600">/día*</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-600">
                        *Descuento promocional aplicado.
                    </p>
                </div>

                {/* Botón CTA */}
                <div className="text-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                        ¡Quiero probar!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuickPricing;