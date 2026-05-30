import Button from '../../../components/ui/Button';
import styles from '../styles/CreateOrder.module.css';
import type { CartAction, IMenu } from '../types/orders';

interface MenuCardProps {
  item: IMenu;
  onAddToCart: (action: CartAction, id: string, name: string) => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  return (
    <div className={styles.item}>
      {/* 
      // ? : image ini terlalu berat jika digunakan ketika render komponen
      */}
      {/* <img
        src={item.image_url}
        alt={item.name}
        className={styles.image}
        loading="lazy"
        decoding="async"
      /> */}
      <h2>{item.name}</h2>
      <div className={styles.bottom}>
        <p className={styles.price}>${item.price}</p>
        <Button onClick={() => onAddToCart('increment', item.id, item.name)}>
          Order
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
