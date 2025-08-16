import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import type { UiProduct } from '../types/product';

// Importar imágenes
import pollo_diet from './../assets/diet_pollo.png';
import ternera_diet from './../assets/diet_beef.png';
import salmon_diet from './../assets/diet_salmongamba.png';
import cuy_diet from './../assets/diet_cuy.png';
import alpaca_diet from './../assets/diet_alpaca.png';
import pavo_diet from './../assets/diet_pavo.png';

interface StoreProps {
  addToCart: (product: UiProduct) => void;
}

// Datos mock que coinciden con UiProduct
const mockProducts: UiProduct[] = [
  {
    id: 1,
    title: "Pack 10 unidades (450g) - Pollo",
    discount: "5% de descuento",
    originalPrice: 109.00,
    currentPrice: 103.55,
    image: pollo_diet,
    alt: "Pack 10 unidades de comida para perros sabor pollo"
  },
  {
    id: 2,
    title: "Pack 20 unidades (450g) - Ternera",
    discount: "10% de descuento",
    originalPrice: 218.00,
    currentPrice: 196.20,
    image: ternera_diet,
    alt: "Pack 20 unidades de comida para perros sabor ternera"
  },
  {
    id: 3,
    title: "Pack 30 unidades (450g) - Salmón",
    discount: "15% de descuento",
    originalPrice: 327.00,
    currentPrice: 277.95,
    image: salmon_diet,
    alt: "Pack 30 unidades de comida para perros sabor salmón"
  },
  {
    id: 4,
    title: "Pack 10 unidades (450g) - Cuy",
    discount: "5% de descuento",
    originalPrice: 109.00,
    currentPrice: 103.55,
    image: cuy_diet,
    alt: "Pack 10 unidades de comida para perros sabor cuy"
  },
  {
    id: 5,
    title: "Pack 20 unidades (450g) - Alpaca",
    discount: "10% de descuento",
    originalPrice: 218.00,
    currentPrice: 196.20,
    image: alpaca_diet,
    alt: "Pack 20 unidades de comida para perros sabor alpaca"
  },
  {
    id: 6,
    title: "Pack 30 unidades (450g) - Pavo",
    discount: "15% de descuento",
    originalPrice: 327.00,
    currentPrice: 277.95,
    image: pavo_diet,
    alt: "Pack 30 unidades de comida para perros sabor pavo"
  }
];

const Store: React.FC<StoreProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<UiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [useApi, setUseApi] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      if (useApi) {
        try {
          // Intentar cargar desde API
          const response = await fetch('http://localhost:8080/api/products');
          if (!response.ok) {
            throw new Error('Backend no disponible');
          }
          const apiProducts = await response.json();
          // Aquí aplicarías tu mapper si tienes uno
          // const mapped = apiProducts.map(toUiProduct);
          setProducts(apiProducts);
        } catch (error) {
          console.warn('No se pudo conectar con el backend, usando datos mock:', error);
          setUseApi(false);
          setProducts(mockProducts);
        }
      } else {
        setProducts(mockProducts);
      }
      setLoading(false);
    };

    loadProducts();
  }, [useApi]);

  const handleAddToCart = (product: UiProduct): void => {
    addToCart(product);
    console.log(`Producto agregado al carrito: ${product.title}`);
  };

  if (loading) {
    return (
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center text-[#4a3728]">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a3728] leading-tight">
            Nuestra Tienda
          </h2>
          <p className="text-lg text-[#6b4c3a] mt-4">
            Si no sabes la ración diaria recomendada para tu perro puedes usar{' '}
            <span className="text-orange-500 underline cursor-pointer hover:text-orange-600">
              nuestra calculadora
            </span>.
          </p>
          
          {/* Indicador de fuente de datos */}
          {!useApi && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-sm">
              <p>🔄 Mostrando productos de demostración (backend no disponible)</p>
            </div>
          )}
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No hay productos disponibles.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 text-orange-500 underline hover:text-orange-600"
            >
              Reintentar
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square bg-white p-6">
                  <img 
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9kdWN0bzwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#4a3728] mb-3">
                    {product.title}
                  </h3>

                  {/* Badge de descuento */}
                  {product.discount && (
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {product.discount}
                    </div>
                  )}

                  <div className="mb-6">
                    {/* Precio original si existe */}
                    {product.originalPrice && (
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-gray-500 text-lg">Desde</span>
                        <span className="text-gray-500 text-lg line-through">
                          S/ {product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    )}
                    
                    {/* Precio actual */}
                    <div className="text-3xl font-bold text-[#4a3728]">
                      S/ {product.currentPrice.toFixed(2)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Agregar al carrito</span>
                    </button>
                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-[#4a3728] font-bold py-2 px-6 rounded-full transition-all duration-300 text-sm">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-[#6b4c3a] text-lg">
            ¿Tienes dudas sobre qué pack elegir?{' '}
            <button className="text-orange-500 underline hover:text-orange-600 font-medium">
              Contáctanos
            </button>{' '}
            y te ayudamos a encontrar la mejor opción.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Store;