import { useMutation, useQueryClient } from '@tanstack/react-query';
import Orders from '../api/orders';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import type { CreateOrderPayload } from '../types/orders';

function useCreateOrderMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: CreateOrderPayload) => Orders.createOrder(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['menus'] });
      toast.success('Berhasil menambahkan pesanan!');

      navigate('/orders');
    },
    onError: (error) => {
      toast.error(error.message || 'Gagal menambahkan pesanan');
    },
  });
}

export default useCreateOrderMutation;
