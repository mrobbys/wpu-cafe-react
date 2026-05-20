import { useQuery, keepPreviousData } from '@tanstack/react-query';
import Orders from '../api/orders';

function useMenusQuery(category: string, page: number) {
  return useQuery({
    queryKey: ['menus', category, page],
    queryFn: () => Orders.getMenu(category, page),
    placeholderData: keepPreviousData,
  });
}

export default useMenusQuery;
