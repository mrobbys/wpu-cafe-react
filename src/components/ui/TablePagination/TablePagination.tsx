import type { Table } from '@tanstack/react-table';
import styles from './TablePagination.module.css';

interface TablePaginationProps<T> {
  table: Table<T>;
}

const TablePagination = <T,>({ table }: TablePaginationProps<T>) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        &lt;
      </button>
      <span>
        Halaman {table.getState().pagination.pageIndex + 1} dari{' '}
        {table.getPageCount()}
      </span>
      <button
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        &gt;
      </button>
    </div>
  );
};

export default TablePagination;