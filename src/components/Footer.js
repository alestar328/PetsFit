import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-orange-500 py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Navegación principal */}
                <nav className="flex flex-wrap justify-center items-center gap-8 mb-8">
                    <a 
                        href="#home" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Home
                    </a>
                    <a 
                        href="#experience" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Experience
                    </a>
                    <a 
                        href="#news" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        News
                    </a>
                    <a 
                        href="#about" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        About us
                    </a>
                    <a 
                        href="#jobs" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Jobs
                    </a>
                    <a 
                        href="#contact" 
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                    >
                        Contact
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
                        href="#" 
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        © Copyright 2019 - Lift Media
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;