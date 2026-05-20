import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import styles from '../styles/Orders.module.css';
import OrdersHeader from '../components/OrdersHeader';
import useOrdersQuery from '../hooks/useOrdersQuery';
import OrderListTable from '../components/OrderListTable';
import { useLogout } from '../../auth';

const Orders = () => {
  const { data, error, isError, isPending } = useOrdersQuery();
  const { logout } = useLogout();

  return (
    <main className={styles.order}>
      <OrdersHeader>
        <Link to="/create">
          <Button>Create Order</Button>
        </Link>
        <Button color="secondary" onClick={() => logout()}>
          Logout
        </Button>
      </OrdersHeader>
      <section>
        {isPending && <p>Loading...</p>}

        {isError && <p>{error.message}</p>}

        {!isPending && !isError && data && (
          <OrderListTable orders={data} />
        )}

      </section>
    </main>
  )
}

export default Orders;