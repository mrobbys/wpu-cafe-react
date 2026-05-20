import { useMutation } from '@tanstack/react-query';
import Auth from '../api/auth';
import { setUserToken } from '../../../utils/sessionStorage';
import type { LoginRequest } from '../types/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function useLoginMutation() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (credentials: LoginRequest) =>
      await Auth.login(credentials),
    onSuccess: (data) => {
      toast.success('Login Berhasil!');
      setUserToken(data.token);

      navigate('/orders');
    },
    onError: (error) => {
      toast.error(error.message || 'Login gagal!');
    },
  });
}

export default useLoginMutation;
