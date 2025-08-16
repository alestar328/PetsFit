// Lo que devuelve tu backend (DTO)
export interface ProductResponse {
    id: number;
    name: string;
    species: 'DOG' | 'CAT';
    flavor: 'CHICKEN' | 'BEEF' | 'FISH';
    weightGrams: number;       // 450
    price: number;             // mejor número que string
    currency: string;          // "PEN"
    active: boolean;
  }
  
  // Tipo que usa tu UI en la tienda
  export interface UiProduct {
    id: number;
    title: string;             // ej. "Pack 10 unidades (400g)" o "Bolsa 450g Pollo Perro"
    discount?: string;
    originalPrice?: number;
    currentPrice: number;
    image: string;
    alt: string;
  }
  
  // Tipo que usa tu carrito (ya lo tenías)
  export interface CartItem extends UiProduct {
    quantity: number;
  }