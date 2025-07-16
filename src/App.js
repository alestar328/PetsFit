import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PetsCards from './components/PetsCards';
import QuickPricing from './components/QuickPricing';
import Diets  from './components/Diets';
import BudgetCalculator from './components/BudgetCalculator';
import Store from './components/Store';
import Footer from './components/Footer';
import ShoppingCartLat from './components/ShoppingCartLat';


function App() {
    
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    // Función para abrir el calculador
  const openCalculator = () => { setIsCalculatorOpen(true); };

    // Función para cerrar el calculador
  const closeCalculator = () => { setIsCalculatorOpen(false);};

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const openCart = () => { setIsCartOpen(true); };
  const closeCart = () => { setIsCartOpen(false); };

    const addToCart = (product) => {
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
  const updateQuantity = (productId, newQuantity) => {
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
  const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Vaciar todo el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total de items en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };


  return (
   <div className="min-h-screen bg-[#f5f1e8] text-[#4a3728]">
            <Header 
              openCalculator={openCalculator}
              openCart={openCart}
              cartItemsCount={getTotalItems()}
            />
            <Hero />
            <PetsCards />
            <QuickPricing/>
            <Diets/>
            <Store addToCart={addToCart} />
            <Footer/>

            {isCalculatorOpen && (
                <div className="fixed inset-0 z-50">
                    <BudgetCalculator onClose={closeCalculator} />
                </div>
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
}

export default App;
