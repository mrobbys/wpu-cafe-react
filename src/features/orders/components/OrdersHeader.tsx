import styles from '../styles/Orders.module.css';

interface OrdersHeaderProps {
  children: React.ReactNode;
}

const OrdersHeader = ({ children }: OrdersHeaderProps) => {
  return (
    <section className={styles.header}>
      <h1 className={styles.title}>Order List</h1>
      <div className={styles.button}>
        {children}
      </div>
    </section>
  )
}

export default OrdersHeader;