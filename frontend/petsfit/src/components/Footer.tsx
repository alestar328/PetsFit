import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-orange-500 py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Navegación principal */}
                <nav className="flex flex-wrap justify-center items-center gap-8 mb-8">
                    <a 
                        href="#home" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Inicio
                    </a>
                    <a 
                        href="#experience" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Reseñas
                    </a>
              
                    <a 
                        href="#about" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Sobre nosotros
                    </a>
                    <a 
                        href="#jobs" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Colaboradores
                    </a>
                    <a 
                        href="#contact" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Contacto
                    </a>
                </nav>

                {/* Iconos de redes sociales */}
                <div className="flex justify-center items-center gap-6 mb-8">
                    <a 
                        href="#" 
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                  
                    <a 
                        href="https://www.instagram.com/petsfitnutrition/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>

                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        © Copyright 2025 - Prometeux Webs
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;