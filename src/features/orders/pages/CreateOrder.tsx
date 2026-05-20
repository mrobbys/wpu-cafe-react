import styles from '../styles/CreateOrder.module.css';
import MenuFilter from '../components/MenuFilter';
import MenuCard from '../components/MenuCard';
import CustomerInfoForm from '../components/CustomerInfoForm';
import CartSummary from '../components/CartSummary';
import Pagination from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import useMenusQuery from '../hooks/useMenusQuery';
import type { IMenu } from '../types/orders';
import useCarts from '../hooks/useCarts';
import useCreateOrderHandlers from '../hooks/useCreateOrderHandlers';

const CreateOrder = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const page = Number(searchParams.get('page') || 1);

  const { data, isPending: isPendingMenus, isError: isErrorMenus, error: errorMenus } = useMenusQuery(category, page);
  const { carts, handleAddToCart } = useCarts();
  const { handleOrder, isPending } = useCreateOrderHandlers(carts);

  const menus = data?.data;
  const metadata = data?.metadata;

  return (
    <div className={styles.create}>
      <div className={styles.menu}>
        <h1>Explore Our Best Menu</h1>
        <MenuFilter />
        <div className={styles.list}>

          {isPendingMenus && <p>Loading Menu...</p>}
          {isErrorMenus && <p>{errorMenus.message}</p>}

          {!isPendingMenus && !isErrorMenus && menus && (menus.map((item: IMenu) => (
            <MenuCard key={item.id} item={item} onAddToCart={() => handleAddToCart('increment', item.id, item.name)} />
          )))}
        </div>
        <Pagination totalPages={metadata?.totalPages || 1} />
      </div>
      <form className={styles.form} onSubmit={handleOrder}>
        <CustomerInfoForm />
        <CartSummary carts={carts} onAddToCart={handleAddToCart} isPending={isPending} />
      </form>
    </div>
  )
}

export default CreateOrder;