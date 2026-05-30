import { useSearchParams } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import styles from '../styles/CreateOrder.module.css';
import { filters } from '../constants/CreateOrder.constants';

const MenuFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.filter}>
      {filters.map((filter) => (
        <Button
          type="button"
          color={
            (!searchParams.get('category') && filter === 'All') ||
            filter === searchParams.get('category')
              ? 'primary'
              : 'secondary'
          }
          onClick={() =>
            setSearchParams(
              filter === 'All' ? { page: '1' } : { category: filter, page: '1' }
            )
          }
          key={filter}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default MenuFilter;
