import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DogChickenDiet from './../assets/dog_chicken_diet.png';
import DogBeefDiet from './../assets/dog_beef_diet.png';
import CatFishDiet from './../assets/cat_fish_diet.png';
import CatTurkey from './../assets/cat_turkey_diet.png';

function Diets() {
    // Estado para controlar la dieta activa
    const [activeDiet, setActiveDiet] = useState(0);

    // Datos de las dietas
    const diets = [
        {
            id: 1,
            name: "Menú de pollo",
            title: "Menú de pollo",
            percentage1: "60% de pollo 🍗",
            percentage2: "40% de zanahoria, calabaza y otras verduras 🥕",
            benefits: [
                "Mantiene los músculos fuertes",
                "Favorece un pelaje sano y brillante", 
                "Contiene una sola fuente de proteína",
                "Minimiza el riesgo de alergias"
            ],
            image: DogChickenDiet, // Reemplaza con tu imagen
            alt: "Perro beagle comiendo menú de pollo"
        },
        {
            id: 2,
            name: "Menú de pavo",
            title: "Menú de pavo",
            percentage1: "65% de pavo 🦃",
            percentage2: "35% de boniato, brócoli y otras verduras 🥦",
            benefits: [
                "Alto en proteína magra",
                "Fácil digestión",
                "Rico en vitaminas B",
                "Ideal para perros activos"
            ],
            image: CatTurkey, // Reemplaza con tu imagen
            alt: "Perro comiendo menú de pavo"
        },
        {
            id: 3,
            name: "Menú de Ternera",
            title: "Menú de Ternera",
            percentage1: "70% de Ternera 🥩",
            percentage2: "30% de patata, guisantes y otras verduras 🥔",
            benefits: [
                "Rica fuente de hierro",
                "Fortalece el sistema inmune",
                "Excelente sabor",
                "Energía duradera"
            ],
            image: DogBeefDiet, // Reemplaza con tu imagen
            alt: "Perro comiendo menú de Ternera"
        },
        {
            id: 4,
            name: "Menú de salmón",
            title: "Menú de salmón",
            percentage1: "55% de salmón 🐟",
            percentage2: "45% de arroz, espinacas y otras verduras 🌾",
            benefits: [
                "Rico en omega-3",
                "Mejora la salud cardiovascular",
                "Antiinflamatorio natural",
                "Perfecto para piel sensible"
            ],
            image: CatFishDiet, // Reemplaza con tu imagen
            alt: "Perro comiendo menú de salmón"
        }
    ];

    const currentDiet = diets[activeDiet];

    return (
        <section className="py-16 px-8 bg-[#f5f1e8]">
            <div className="max-w-7xl mx-auto">
                
                {/* Barra de navegación de dietas */}
                <div className="flex items-center justify-center mb-12">
                    {/* Flecha izquierda */}
                    <button 
                        className="mr-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                        onClick={() => setActiveDiet(activeDiet > 0 ? activeDiet - 1 : diets.length - 1)}
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Pills de navegación */}
                    <div className="flex space-x-2 overflow-x-auto">
                        {diets.map((diet, index) => (
                            <button
                                key={diet.id}
                                onClick={() => setActiveDiet(index)}
                                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                                    activeDiet === index
                                        ? 'bg-yellow-400 text-[#4a3728] shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                                }`}
                            >
                                {diet.name}
                            </button>
                        ))}
                    </div>

                    {/* Flecha derecha */}
                    <button 
                        className="ml-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                        onClick={() => setActiveDiet(activeDiet < diets.length - 1 ? activeDiet + 1 : 0)}
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Contenedor del carousel */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        
                        {/* Lado izquierdo - Imagen */}
                        <div className="relative bg-gray-200">
                            {/* Badge del chef */}
                            <div className="absolute top-6 right-6 z-15">
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <div className="text-white text-xs font-bold text-center leading-tight">
                                        RECETA<br/>PERUANA
                                    </div>
                                </div>
                            </div>

                            {/* Imagen principal */}
                            <div className="aspect-square md:aspect-auto md:h-full">
                                <img 
                                    src={currentDiet.image}
                                    alt={currentDiet.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Flechas de navegación del carousel */}
                            <button 
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                                onClick={() => setActiveDiet(activeDiet > 0 ? activeDiet - 1 : diets.length - 1)}
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            
                            <button 
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                                onClick={() => setActiveDiet(activeDiet < diets.length - 1 ? activeDiet + 1 : 0)}
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* Indicadores de puntos */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {diets.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            activeDiet === index ? 'bg-white' : 'bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Lado derecho - Contenido */}
                        <div className="p-8 md:p-12">
                            {/* Título */}
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a3728] mb-6">
                                {currentDiet.title}
                            </h2>

                            {/* Porcentajes */}
                            <div className="mb-8 space-y-2">
                                <p className="text-lg text-[#6b4c3a]">
                                    Con un <span className="font-bold text-blue-600">{currentDiet.percentage1}</span> y un <span className="font-bold text-blue-600">{currentDiet.percentage2}</span>
                                </p>
                            </div>

                            {/* Lista de beneficios */}
                            <div className="space-y-4 mb-8">
                                {currentDiet.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        </div>
                                        <p className="text-[#6b4c3a] leading-relaxed">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Botón CTA */}
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                                <span>¡Quiero probar!</span>
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Diets;