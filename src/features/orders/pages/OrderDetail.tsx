import { Link, useParams } from 'react-router-dom';
import useOrderDetailQuery from '../hooks/useOrderDetailQuery';
import styles from '../styles/OrderDetail.module.css'
import Button from '../../../components/ui/Button';
import OrderItemCard from '../components/OrderItemCard';
import OrderInfoCard from '../components/OrderInfoCard';
import type { OrderItem } from '../types/orders';

const OrderDetail = () => {
  const { id } = useParams();
  const { data: order, isError, error, isPending } = useOrderDetailQuery(id);

  return (
    <main className={styles.detail}>
      <section className={styles.header}>
        <h1>Detail Order</h1>
        <Link to="/orders">
          <Button>Back</Button>
        </Link>
      </section>
      <section>
        {isPending && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {!isPending && !isError && order && (
          <div className={styles.order}>
            <OrderInfoCard order={order} />
            <div className={styles.cart}>
              <h3>Order Items</h3>
              <div className={styles.list}>
                {order?.cart?.map((item: OrderItem) => (
                  <OrderItemCard key={item.menuItem.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default OrderDetail;