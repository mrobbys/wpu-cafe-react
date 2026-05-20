import axiosInstance from '../../../api/axiosInstance';
import OrdersEndpoint from '../../../api/orders.endpoint';
import type { CreateOrderPayload, IOrder } from '../types/orders';

const defaultParameter = {
  page: 1,
  pageSize: 10,
};

const Orders = {
  // * endpoint get orders
  async getOrders() {
    const response = await axiosInstance.get<{ data: IOrder[] }>(
      OrdersEndpoint.ORDER
    );
    return response.data.data;
  },
  // * endpoint get order by id
  async getOrderById(id: string) {
    const response = await axiosInstance.get<{ data: IOrder }>(
      `${OrdersEndpoint.ORDER}/${id}`
    );
    return response.data;
  },
  // * endpoint get menu by category (opsional), default = all
  async getMenu(category: string, page: number = defaultParameter.page) {
    let urlTarget = `${OrdersEndpoint.MENU}?page=${page}&pageSize=${defaultParameter.pageSize}`;

    if (category) {
      urlTarget += `&category=${category}`;
    }

    const response = await axiosInstance.get(urlTarget);
    return response.data;
  },
  // * endpoint create order
  async createOrder(payload: CreateOrderPayload) {
    await axiosInstance.post(OrdersEndpoint.ORDER, payload);
  },
  // * endpoint update order
  async updateOrder(id: string, payload: { status: string }) {
    await axiosInstance.put(`${OrdersEndpoint.ORDER}/${id}`, payload);
  },
  // * endpoint delete order
  async deleteOrder(id: string) {
    await axiosInstance.delete(`${OrdersEndpoint.ORDER}/${id}`);
  },
};

export default Orders;
