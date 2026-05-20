import { destroyUserToken } from '../../../utils/sessionStorage';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    destroyUserToken();
    queryClient.clear();
    toast.success('Logout Berhasil!');
    navigate('/login');
  };

  return { logout };
}

export default useLogout;
