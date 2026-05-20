import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import Button from '../../../components/ui/Button';
import { getUserToken } from '../../../utils/sessionStorage';

const Home = () => {
  const token = getUserToken('userToken');
  const userIsLogged = !!token;
  
  return (
    <main className={styles.home}>
      <h1>Welcome To WPU Cafe</h1>

      {userIsLogged ? (
        <Link to="/orders">
          <Button>Orders</Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}

    </main>
  );
};

export default Home;
