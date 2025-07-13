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

function App() {
    
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    // Función para abrir el calculador
  const openCalculator = () => { setIsCalculatorOpen(true); };

    // Función para cerrar el calculador
  const closeCalculator = () => { setIsCalculatorOpen(false);};

  return (
   <div className="min-h-screen bg-[#f5f1e8] text-[#4a3728]">
            <Header openCalculator={openCalculator}/>
            <Hero />
            <PetsCards />
            <QuickPricing/>
            <Diets/>
            <Store/>
            <Footer/>

            {isCalculatorOpen && (
                <div className="fixed inset-0 z-50">
                    <BudgetCalculator onClose={closeCalculator} />
                </div>
            )}

        </div>
  );
}

export default App;
