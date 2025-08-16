import type { ProductResponse } from '../types/product';

const BASE_URL = 'http://localhost:8080';

export async function fetchProducts(): Promise<ProductResponse[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/products`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} - No se pudieron cargar los productos`);
    }
    return res.json();
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('No se pudo conectar con el servidor. Asegúrate de que el backend esté ejecutándose en http://localhost:8080');
    }
    throw error;
  }
}