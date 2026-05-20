import { useQuery } from '@tanstack/react-query';
import Orders from '../api/orders';

function useOrdersQuery() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: Orders.getOrders,
  });
}

export default useOrdersQuery;
