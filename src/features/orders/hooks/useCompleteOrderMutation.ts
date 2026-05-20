import { useMutation, useQueryClient } from '@tanstack/react-query';
import Orders from '../api/orders';
import toast from 'react-hot-toast';

function useCompleteOrderMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => Orders.updateOrder(id, { status: 'COMPLETED' }),

    onSuccess: () => {
      toast.success('Berhasil update status pesanan menjadi completed!');
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },

    onError: (error) => {
      toast.error(error.message || 'Gagal update status pesanan');
    },
  });
}

export default useCompleteOrderMutation;
