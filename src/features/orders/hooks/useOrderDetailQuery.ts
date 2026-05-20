import { useQuery } from '@tanstack/react-query';
import Orders from '../api/orders';

function useOrderDetailQuery(id: string) {
  return useQuery({
    queryKey: ['orders', id],
    queryFn: () => Orders.getOrderById(id!),
    enabled: !!id,
  });
}

export default useOrderDetailQuery;
