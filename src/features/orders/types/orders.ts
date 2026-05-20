type OrderStatus = 'COMPLETED' | 'PROCESSING';

interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  isAvailable: boolean;
}

interface CartItem {
  id: string;
  menuId: string;
  quantity: number;
  name: string;
}

interface ICart {
  id: string;
  menuId: string;
  quantity: number;
  name?: string;
  menuItem?: IMenu;
}

interface IOrder {
  id: string;
  customer_name: string;
  table_number: number;
  cart: ICart[];
  status: OrderStatus;
  total: number;
}

interface OrderItem {
  quantity: number;
  menuItem: IMenu;
}

interface CreateOrderPayload {
  customerName: string;
  tableNumber: string;
  cart: {
    menuItemId: string;
    quantity: number;
    notes: string;
  }[];
}

type CartAction = 'increment' | 'decrement';

export type {
  IOrder,
  ICart,
  IMenu,
  OrderItem,
  CreateOrderPayload,
  CartAction,
  CartItem,
};
