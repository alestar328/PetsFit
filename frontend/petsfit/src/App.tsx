import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import PetsCards from './components/PetsCards';
import QuickPricing from './components/QuickPricing';
import Diets from './components/Diets';
import BudgetCalculator from './components/BudgetCalculator';
import Store from './pages/Store';
import Footer from './components/Footer';
import ShoppingCartLat from './components/ShoppingCartLat';

interface Product {
    id: number;
    title: string;
    discount?: string;
    originalPrice?: number; // Changed to number to match UiProduct
    currentPrice: number; // Changed to number to match UiProduct
    image: string;
    alt: string;
}

interface CartItem extends Product {
    quantity: number;
}

const App: React.FC = () => {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Función para abrir el calculador
    const openCalculator = (): void => {
        setIsCalculatorOpen(true);
    };

    // Función para cerrar el calculador
    const closeCalculator = (): void => {
        setIsCalculatorOpen(false);
    };

    const openCart = (): void => {
        setIsCartOpen(true);
    };

    const closeCart = (): void => {
        setIsCartOpen(false);
    };

    const openLogin = (): void => {
        setIsLoginOpen(true);
    };

    const closeLogin = (): void => {
        setIsLoginOpen(false);
    };

    const addToCart = (product: Product): void => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            
            if (existingItem) {
                // Si el producto ya existe, incrementar cantidad
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Si es un producto nuevo, agregarlo con cantidad 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
        
        // Mostrar el carrito automáticamente al agregar un producto
        setIsCartOpen(true);
    };

    // Actualizar cantidad de un producto
    const updateQuantity = (productId: number, newQuantity: number): void => {
        if (newQuantity < 1) return;
        
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Eliminar un producto del carrito
    const removeItem = (productId: number): void => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    // Vaciar todo el carrito
    const clearCart = (): void => {
        setCartItems([]);
    };

    // Calcular total de items en el carrito
    const getTotalItems = (): number => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="min-h-screen bg-[#f5f1e8] text-[#4a3728]">
            <Header 
                openCalculator={openCalculator}
                openCart={openCart}
                openLogin={openLogin}
                cartItemsCount={getTotalItems()}
            />
            <Hero />
            <div id="about">
                <AboutUs />
            </div>
            <PetsCards />
            <QuickPricing />
            <Diets />
            <div id="store">
            <Store addToCart={addToCart} />
            </div>
            <Footer />

            {isCalculatorOpen && (
                <div className="fixed inset-0 z-50">
                    <BudgetCalculator onClose={closeCalculator} />
                </div>
            )}

            {isLoginOpen && (
                <Login onClose={closeLogin} />
            )}

            <ShoppingCartLat
                isOpen={isCartOpen}
                onClose={closeCart}
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                clearCart={clearCart}
            />
        </div>
    );
};

export default App;