import type { ReactNode } from 'react';
import { getUserToken } from '../utils/sessionStorage';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = getUserToken();

  const currentRoute = useLocation().pathname;

  // jika belum login dan bukan di halaman login, pindah ke halaman login
  if (!auth && currentRoute !== '/login') {
    return <Navigate to="/login" replace />;
  }

  // jika sudah login dan di halaman login, pindah ke halaman orders
  if (auth && currentRoute === '/login') {
    return <Navigate to="/orders" replace />;
  }

  return children;
};

export default ProtectedRoute;
