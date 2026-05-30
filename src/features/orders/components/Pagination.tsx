import { useSearchParams } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import styles from '../styles/CreateOrder.module.css';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const page = Number(searchParams.get('page')) || 1;

  const handlePageChange = (newPage: number) => {
    const params: Record<string, string> = { page: String(newPage) };
    if (category) {
      params.category = category;
    }
    setSearchParams(params);
  };

  return (
    <div className={styles.pagination}>
      <Button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        &lt;
      </Button>

      <span>
        Halaman {page} dari {totalPages || 1}
      </span>

      <Button
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
