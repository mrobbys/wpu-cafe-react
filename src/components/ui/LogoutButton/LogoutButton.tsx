import { useLogout } from '../../../features/auth';
import Button from '../Button';

const LogoutButton = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
