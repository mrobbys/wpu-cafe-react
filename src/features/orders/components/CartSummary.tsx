import Button from '../../../components/ui/Button';
import styles from '../styles/CreateOrder.module.css';
import type { CartAction, ICart } from '../types/orders';

interface CartSummaryProps {
  carts: ICart[];
  onAddToCart: (action: CartAction, id: string, name: string) => void;
  isPending?: boolean;
}

const CartSummary = ({ carts, onAddToCart, isPending }: CartSummaryProps) => {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Current Order</h2>
      </div>
      {carts.length > 0 ? (
        <div className={styles.cart}>
          {carts.map((item: ICart) => (
            <div className={styles.cartItem} key={item.id}>
              <h4 className={styles.name}>{item.name}</h4>
              <div className={styles.quantity}>
                <Button
                  type="button"
                  onClick={() =>
                    onAddToCart('decrement', item.id, item.name)
                  }
                  color="secondary"
                  disabled={isPending}
                >
                  -
                </Button>
                <div className={styles.number}>{item.quantity}</div>
                <Button
                  type="button"
                  onClick={() =>
                    onAddToCart('increment', item.id, item.name)
                  }
                  color="secondary"
                  disabled={isPending}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
          <Button disabled={isPending} type="submit">Order</Button>
        </div>
      ) : (
        <div className={styles.cart}>
          <h4>Cart is empty</h4>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
