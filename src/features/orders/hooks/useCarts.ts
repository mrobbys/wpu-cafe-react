import { useState } from 'react';
import type { CartAction, CartItem } from '../types/orders';

function useCarts() {
  const [carts, setCarts] = useState<CartItem[]>([]);

  const handleAddToCart = (type: CartAction, id: string, name: string) => {
    const itemIsInCart = carts.find((item) => item.id === id);

    if (type === 'increment') {
      if (itemIsInCart) {
        setCarts(
          carts.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setCarts([...carts, { id, menuId: id, name, quantity: 1 }]);
      }
    } else if (type === 'decrement') {
      if (itemIsInCart) {
        if (itemIsInCart.quantity > 1) {
          setCarts(
            carts.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
          );
        } else {
          setCarts(carts.filter((item) => item.id !== id));
        }
      }
    }
  };

  return { carts, handleAddToCart };
}

export default useCarts;
