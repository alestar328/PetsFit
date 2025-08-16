import React from 'react';
import logo from '../assets/logo_siluetas.png';
import main_video from '../assets/videos/human_dog_eating.mp4';

const Hero: React.FC = () => {
    return (
        <section id="home" className="px-8 py-10 max-w-7xl mx-auto my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                <div className="text-center lg:text-center">
                    {/* <img 
                        src={logo} 
                        alt="PetsFit logo" 
                        className="mx-auto mb-6 w-48 md:w-60 lg:w-80 h-auto"
                    /> */}
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-[#4a3728] leading-tight">
                        Como la comida casera, no hay otra
                    </h2>
                    
                    <p className="text-lg md:text-xl mb-8 text-[#6b4c3a] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Nutritiva, deliciosa y rápida.
                    </p>
                    
                    <button className="bg-[#4a3728] text-[#f5f1e8] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5d4935] transition-colors">
                        Quiero lo mejor para mi bebé
                    </button>
                </div>

                {/* Right Column - Video */}
                <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl scale-110">
                        <video 
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={main_video} type="video/mp4" />
                            <source src={main_video} type="video/webm" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;