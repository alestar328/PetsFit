import { User, ShoppingCart  } from 'lucide-react';


function Header({openCalculator, openCart, cartItemsCount}) {
    return (
    <>
          <div className="bg-orange-500 text-white py-2 px-8">
                <div className="max-w-6xl mx-auto text-center text-m">
                    ¡Envío gratis en pedidos mayores a S/. 100! 🚚 (5% dcto adicional con tu Tarjeta Interbank)
                </div>
            </div>
            

        <header className="sticky top-0 flex bg-white z-50 justify-between items-center px-8 py-6 max-w-6xl mx-auto">
            {/* Navegación izquierda */}
            <nav className="flex space-x-8">
                <a href="#home" className="text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium">
                    Inicio
                </a>
                <a href="#about" className="text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium">
                    Sobre nosotros
                </a>
                <a href="#contact" className="text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium">
                    Tienda
                </a>
            </nav>

            {/* Botones derecha */}
            <div className="flex items-center space-x-4">
                {/* Botón Mi cuenta */}
                <button className="flex items-center space-x-2 text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium">
                    <User className="w-5 h-5" />
                    <span>Mi cuenta</span>
                </button>
                <button 
                    onClick={openCart}
                    className="relative flex items-center space-x-2 text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium p-2 rounded-lg hover:bg-gray-100"
                >
                    <ShoppingCart className="w-6 h-6" />
                    <span className="hidden md:inline">Carrito</span>
                    
                    {/* Badge con número de productos */}
                    {cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                            {cartItemsCount > 99 ? '99+' : cartItemsCount}
                        </span>
                    )}
                </button>
                {/* Botón Calcular mi precio */}
                <button onClick={openCalculator}  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                    Calcular mi precio
                </button>
            </div>
        </header>
        </>
    );
}

export default Header;