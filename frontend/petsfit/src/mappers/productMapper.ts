import polloImg from './../assets/diet_pollo.png';
import terneraImg from './../assets/diet_beef.png';
import salmonImg from './../assets/diet_salmongamba.png';
// si quieres mapear otros sabores, añade aquí

import type { ProductResponse, UiProduct } from '../types/product';

function imageForFlavor(flavor: ProductResponse['flavor']): string {
  switch (flavor) {
    case 'CHICKEN': return polloImg;
    case 'BEEF':    return terneraImg;
    case 'FISH':    return salmonImg;
    default:        return polloImg;
  }
}

export function toUiProduct(p: ProductResponse): UiProduct {
  // ejemplo simple: mostramos el “precio actual” directamente; si quieres “originalPrice/discount” calcula aquí
  return {
    id: p.id,
    title: p.name,                             // p.ej. "Bolsa 450g Pollo Perro"
    currentPrice: Number(p.price),             // asegúrate que sea number
    image: imageForFlavor(p.flavor),
    alt: `${p.name} (${p.flavor})`,
    // opcionales:
    // originalPrice: Number(p.price) * 1.05,
    // discount: "5% de descuento",
  };
}