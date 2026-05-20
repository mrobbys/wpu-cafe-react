import styles from '../styles/OrderDetail.module.css';
import type { IOrder } from '../types/orders';

const OrderInfoCard = ({ order }: { order: IOrder }) => {
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <p>Order ID:</p>
        <h4>{order.id}</h4>
      </div>
      <div className={styles.item}>
        <p>Customer:</p>
        <h4>{order.customer_name}</h4>
      </div>
      <div className={styles.item}>
        <p>Table:</p>
        <h4>{order.table_number}</h4>
      </div>
      <div className={styles.item}>
        <p>Status:</p>
        <h4>{order.status}</h4>
      </div>
      <div className={styles.item}>
        <p>Total:</p>
        <h4>${order.total}</h4>
      </div>
    </div>
  );
};

export default OrderInfoCard;
