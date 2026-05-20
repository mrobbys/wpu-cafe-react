import styles from '../styles/OrderDetail.module.css';
import type { OrderItem } from '../types/orders';

interface OrderItemCardProps {
  item: OrderItem;
}

const OrderItemCard = ({ item }: OrderItemCardProps) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.image}
        src={item.menuItem.image_url}
        alt={item.menuItem.name}
      />
      <p className={styles.name}>
        {item.quantity} x {item.menuItem.name}
      </p>
    </div>
  );
};

export default OrderItemCard;
