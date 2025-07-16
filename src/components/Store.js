import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';

import pollo_diet from './../assets/diet_pollo.png';
import ternera_diet from './../assets/diet_beef.png';
import salmon_diet from './../assets/diet_salmongamba.png';
import cuy_diet from './../assets/diet_cuy.png';
import alpaca_diet from './../assets/diet_alpaca.png';
import pavo_diet from './../assets/diet_pavo.png';
function Store({ addToCart }) {
    // Datos de los productos (2 filas x 3 productos = 6 productos)
    const products = [
        // Primera fila
        {
            id: 1,
            title: "Pack 10 unidades (400g)",
            discount: "5% de descuento",
            originalPrice: "109.00",
            currentPrice: "103.55",
            image: alpaca_diet, // Reemplaza con tu imagen
            alt: "Pack 10 unidades de comida para perros"
        },
        {
            id: 2,
            title: "Pack 20 unidades (400g)",
            discount: "10% de descuento",
            originalPrice: "218.00",
            currentPrice: "196.20",
            image: cuy_diet, // Reemplaza con tu imagen
            alt: "Pack 20 unidades de comida para perros"
        },
        {
            id: 3,
            title: "Pack 30 unidades (400g)",
            discount: "15% de descuento",
            originalPrice: "327.00",
            currentPrice: "277.95",
            image: pollo_diet, // Reemplaza con tu imagen
            alt: "Pack 30 unidades de comida para perros"
        },
        // Segunda fila
        {
            id: 4,
            title: "Pack 10 unidades (400g)",
            discount: "5% de descuento",
            originalPrice: "109.00",
            currentPrice: "103.55",
            image: ternera_diet, // Reemplaza con tu imagen
            alt: "Pack 10 unidades de comida para perros"
        },
        {
            id: 5,
            title: "Pack 20 unidades (400g)",
            discount: "10% de descuento",
            originalPrice: "218.00",
            currentPrice: "196.20",
            image: salmon_diet, // Reemplaza con tu imagen
            alt: "Pack 20 unidades de comida para perros"
        },
        {
            id: 6,
            title: "Pack 30 unidades (400g)",
            discount: "15% de descuento",
            originalPrice: "327.00",
            currentPrice: "277.95",
            image: pavo_diet, // Reemplaza con tu imagen
            alt: "Pack 30 unidades de comida para perros"
        }
    ];

 const handleAddToCart = (product) => {
        addToCart(product);
        
        // Feedback visual opcional
        // Podrías agregar una notificación toast aquí
        console.log(`Producto agregado al carrito: ${product.title}`);
    };
    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a3728] leading-tight">
                        Nuestra Tienda
                    </h2>
                    <p className="text-lg text-[#6b4c3a] mt-4">
                        Si no sabes la ración diaria recomendada para tu perro puedes usar{' '}
                        <span className="text-orange-500 underline cursor-pointer hover:text-orange-600">
                            nuestra calculadora
                        </span>
                        .
                    </p>
                </div>

                {/* Grid de productos - 2 filas x 3 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Imagen del producto */}
                            <div className="aspect-square bg-white p-6">
                                <img 
                                    src={product.image}
                                    alt={product.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Contenido del producto */}
                            <div className="p-6 text-center">
                                {/* Título del producto */}
                                <h3 className="text-xl font-bold text-[#4a3728] mb-3">
                                    {product.title}
                                </h3>

                                {/* Badge de descuento */}
                                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                    {product.discount}
                                </div>

                                {/* Precios */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-center space-x-2 mb-2">
                                        <span className="text-gray-500 text-lg">Desde</span>
                                        <span className="text-gray-500 text-lg line-through">
                                            S/ {product.originalPrice}
                                        </span>
                                    </div>
                                    <div className="text-3xl font-bold text-[#4a3728]">
                                        S/ {product.currentPrice}
                                    </div>
                                </div>

                                {/* Botón de acción */}
                                <div className="space-y-3">
                                    {/* Botón principal: Agregar al carrito */}
                                    <button 
                                        onClick={() => handleAddToCart(product)}
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        <span>Agregar al carrito</span>
                                    </button>
                                    
                                    {/* Botón secundario: Seleccionar opciones */}
                                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-[#4a3728] font-bold py-2 px-6 rounded-full transition-all duration-300 text-sm">
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Texto informativo adicional */}
                <div className="text-center mt-12">
                    <p className="text-[#6b4c3a] text-lg">
                        ¿Tienes dudas sobre qué pack elegir?{' '}
                        <button className="text-orange-500 underline hover:text-orange-600 font-medium">
                            Contáctanos
                        </button>
                        {' '}y te ayudamos a encontrar la mejor opción.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Store;