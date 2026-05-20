import { useMutation, useQueryClient } from '@tanstack/react-query';
import Orders from '../api/orders';
import toast from 'react-hot-toast';

function useDeleteOrderMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => Orders.deleteOrder(id),

    onSuccess: () => {
      toast.success('Pesanan berhasil dihapus!');
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },

    onError: (error) => {
      toast.error(error.message || 'Pesanan gagal dihapus!');
    },
  });
}

export default useDeleteOrderMutation;