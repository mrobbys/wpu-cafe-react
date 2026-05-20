import useCreateOrderMutation from './useCreateOrderMutation';
import type { CartItem } from '../types/orders';

function useCreateOrderHandlers(carts: CartItem[]) {
  const { mutate: createOrder, isPending } = useCreateOrderMutation();

  const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const customerName = form.customerName.value.trim();
    const tableNumber = form.tableNumber.value.trim();

    if (!customerName || !tableNumber || carts.length <= 0) {
      return;
    }

    const payload = {
      customerName,
      tableNumber,
      cart: carts.map((item: CartItem) => ({
        menuItemId: item.id,
        quantity: item.quantity,
        notes: '',
      })),
    };

    createOrder(payload);
  };

  return {
    handleOrder,
    isPending,
  };
}

export default useCreateOrderHandlers;
