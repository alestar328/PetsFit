import React, { useState } from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import logo from '../assets/header_logo.png';

interface HeaderProps {
    openCalculator: () => void;
    openCart: () => void;
    openLogin: () => void;
    cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ openCalculator, openCart, openLogin, cartItemsCount }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Banner superior */}
            <div className="bg-orange-500 text-white py-2 px-4">
                <div className="max-w-6xl mx-auto text-center text-sm">
                    ¡Envío gratis en pedidos mayores a S/. 100! 🚚 (5% dcto adicional con tu Tarjeta Interbank)
                </div>
            </div>
            
            {/* Header principal */}
            <header className="sticky top-0 bg-white z-50 shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center py-2">
                        
                        {/* Lado izquierdo: Menú hamburguesa + Logo */}
                        <div className="flex items-center space-x-3">
                            {/* Botón menú hamburguesa - visible solo en móvil */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Abrir menú"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-[#4a3728]" />
                                ) : (
                                    <Menu className="w-6 h-6 text-[#4a3728]" />
                                )}
                            </button>

                            {/* Logo */}
                            <a href="#home" className="flex items-center -my-4">
                                <img 
                                    src={logo} 
                                    alt="PetsFit logo" 
                                    className="h-16 sm:h-20 w-auto"
                                />
                            </a>
                        </div>

                        {/* Navegación desktop - oculta en móvil */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#home" className="text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium">
                                Inicio
                            </a>
                            <a href="#about" className="text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium">
                                Nuestra misión
                            </a>
                            <a href="#store" className="text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium">
                                Tienda
                            </a>
                        </nav>

                        {/* Lado derecho: Botones de acción */}
                        <div className="flex items-center space-x-2">
                            {/* Botón Mi cuenta - oculto en móvil pequeño */}
                            <button 
                                onClick={openLogin}
                                className="hidden sm:flex items-center space-x-2 text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium p-2 rounded-lg hover:bg-gray-100"
                            >
                                <User className="w-5 h-5" />
                                <span className="hidden lg:inline">Mi cuenta</span>
                            </button>

                            {/* Botón Carrito */}
                            <button 
                                onClick={openCart}
                                className="relative flex items-center space-x-2 text-[#4a3728] hover:text-[#6b4c3a] transition-colors font-medium p-2 rounded-lg hover:bg-gray-100"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                <span className="hidden lg:inline">Carrito</span>
                                
                                {/* Badge con número de productos */}
                                {cartItemsCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartItemsCount > 99 ? '99+' : cartItemsCount}
                                    </span>
                                )}
                            </button>

                            {/* Botón Calcular mi precio */}
                            <button 
                                onClick={openCalculator}  
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-3 sm:py-3 sm:px-6 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap"
                            >
                                <span className="hidden sm:inline">Calcular mi precio</span>
                                <span className="sm:hidden">Calcular</span>
                            </button>
                        </div>
                    </div>

                    {/* Menú móvil desplegable */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 bg-white">
                            <nav className="py-4 space-y-2">
                                <a 
                                    href="#home" 
                                    className="block px-4 py-3 text-[#4a3728] hover:text-[#6b4c3a] hover:bg-gray-50 transition-colors font-medium rounded-lg mx-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Inicio
                                </a>
                                <a 
                                    href="#about" 
                                    className="block px-4 py-3 text-[#4a3728] hover:text-[#6b4c3a] hover:bg-gray-50 transition-colors font-medium rounded-lg mx-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sobre nosotros
                                </a>
                                <a 
                                    href="#contact" 
                                    className="block px-4 py-3 text-[#4a3728] hover:text-[#6b4c3a] hover:bg-gray-50 transition-colors font-medium rounded-lg mx-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Tienda
                                </a>
                                
                                {/* Botón Mi cuenta en móvil */}
                                <button 
                                    onClick={() => {
                                        openLogin();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="flex items-center space-x-3 w-full px-4 py-3 text-[#4a3728] hover:text-[#6b4c3a] hover:bg-gray-50 transition-colors font-medium rounded-lg mx-2 mt-4 border-t border-gray-200 pt-6"
                                >
                                    <User className="w-5 h-5" />
                                    <span>Mi cuenta</span>
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;