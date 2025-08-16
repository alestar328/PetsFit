import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

interface CartItem {
    id: number;
    title: string;
    image: string;
    alt: string;
    currentPrice: number; // Changed to number
    quantity: number;
    discount?: string;
}

interface ShoppingCartLatProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
}

const ShoppingCartLat: React.FC<ShoppingCartLatProps> = ({ 
    isOpen, 
    onClose, 
    cartItems, 
    updateQuantity, 
    removeItem, 
    clearCart 
}) => {
    // Calcular el total del carrito
    const calculateTotal = (): string => {
        return cartItems.reduce((total, item) => {
            return total + (item.currentPrice * item.quantity);
        }, 0).toFixed(2);
    };

    // Calcular el total de items
    const getTotalItems = (): number => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const handleFinalizePurchase = (): void => {
        // Aquí iría la lógica para finalizar la compra
        alert('Funcionalidad de finalizar compra próximamente...');
    };

    const handleCancel = (): void => {
        clearCart();
        onClose();
    };

    return (
        <>
            {/* Overlay de fondo */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}

            {/* Panel lateral del carrito */}
            <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                
                {/* Header del carrito */}
                <div className="bg-orange-500 text-white p-6 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <ShoppingBag className="w-6 h-6" />
                        <h2 className="text-xl font-bold">
                            Mi Carrito ({getTotalItems()})
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-200 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Contenido del carrito */}
                <div className="flex flex-col h-full">
                    {/* Lista de productos */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                                <p className="text-gray-400 text-sm mt-2">
                                    Agrega productos para empezar
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                                        {/* Imagen y info del producto */}
                                        <div className="flex items-start space-x-3 mb-3">
                                            <img 
                                                src={item.image}
                                                alt={item.alt}
                                                className="w-16 h-16 object-contain bg-white rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-bold text-[#4a3728] text-sm leading-tight">
                                                    {item.title}
                                                </h3>
                                                {item.discount && (
                                                    <p className="text-green-600 text-xs mt-1">
                                                        {item.discount}
                                                    </p>
                                                )}
                                                <p className="text-[#4a3728] font-bold mt-1">
                                                    S/ {item.currentPrice.toFixed(2)}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Controles de cantidad */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="w-4 h-4 text-gray-600" />
                                                </button>
                                                
                                                <span className="font-bold text-[#4a3728] min-w-[2rem] text-center">
                                                    {item.quantity}
                                                </span>
                                                
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                                                >
                                                    <Plus className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>

                                            {/* Subtotal */}
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500">Subtotal:</p>
                                                <p className="font-bold text-[#4a3728]">
                                                    S/ {(item.currentPrice * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer con total y botones */}
                    {cartItems.length > 0 && (
                        <div className="border-t bg-white p-4 space-y-4">
                            {/* Total */}
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Subtotal:</span>
                                    <span className="font-medium">S/ {calculateTotal()}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Envío:</span>
                                    <span className="font-medium text-green-600">Gratis</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-[#4a3728]">Total:</span>
                                    <span className="text-lg font-bold text-[#4a3728]">S/ {calculateTotal()}</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    * Envío gratis en pedidos mayores a S/ 100
                                </p>
                            </div>

                            {/* Botones de acción */}
                            <div className="space-y-3">
                                <button
                                    onClick={handleFinalizePurchase}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Finalizar Compra
                                </button>
                                
                                <button
                                    onClick={handleCancel}
                                    className="w-full bg-gray-200 hover:bg-gray-300 text-[#4a3728] font-bold py-3 px-6 rounded-full transition-all duration-300"
                                >
                                    Vaciar Carrito
                                </button>

                                <button
                                    onClick={onClose}
                                    className="w-full text-gray-500 hover:text-gray-700 font-medium py-2 transition-colors"
                                >
                                    Continuar Comprando
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShoppingCartLat;