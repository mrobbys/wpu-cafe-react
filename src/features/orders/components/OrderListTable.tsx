import { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styles from '../styles/Orders.module.css';
import type { IOrder } from '../types/orders';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import useCompleteOrderMutation from '../hooks/useCompleteOrderMutation';
import useDeleteOrderMutation from '../hooks/useDeleteOrderMutation';
import TablePagination from '../../../components/ui/TablePagination';

const columnHelper = createColumnHelper<IOrder>();

const OrderListTable = ({ orders }: { orders: IOrder[] }) => {
  const { mutate: completeOrder, isPending: isPendingCompleteOrder, variables: completingOrderId } = useCompleteOrderMutation();
  const { mutate: deleteOrder, isPending: isPendingDeleteOrder, variables: deletingOrderId } = useDeleteOrderMutation();

  const columns = useMemo(() => [
    columnHelper.display({
      id: 'no',
      header: 'No',
      cell: (info) => info.row.index + 1,
    }),

    columnHelper.accessor('customer_name', {
      header: 'Customer Name',
    }),

    columnHelper.accessor('table_number', {
      header: 'Table',
    }),

    columnHelper.accessor('total', {
      header: 'Total',
      cell: (info) => `$${info.getValue()}`,
    }),

    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => (
        <span className={`${styles.badge} ${styles[info.getValue().toLowerCase()]}`}>
          {info.getValue()}
        </span>
      ),
    }),

    columnHelper.display({
      id: 'action',
      header: 'Action',
      cell: (info) => {
        const order = info.row.original;
        const isCompletingThisRow = isPendingCompleteOrder && completingOrderId === order.id;
        const isDeletingThisRow = isPendingDeleteOrder && deletingOrderId === order.id;

        return (
          <div className={styles.action}>
            <Link to={`/orders/${order.id}`}>
              <Button disabled={isCompletingThisRow || isDeletingThisRow}>
                Detail
              </Button>
            </Link>

            {order.status === 'PROCESSING' && (
              <Button
                onClick={() => completeOrder(order.id)}
                color="success"
                disabled={isCompletingThisRow}
              >
                {isCompletingThisRow ? 'Completing...' : 'Complete'}
              </Button>
            )}

            {order.status === 'COMPLETED' && (
              <Button
                onClick={() => deleteOrder(order.id)}
                disabled={isDeletingThisRow}
                color="danger"
              >
                {isDeletingThisRow ? 'Deleting...' : 'Delete'}
              </Button>
            )}
          </div>
        );
      },
    }),
  ], [isPendingCompleteOrder, completingOrderId, isPendingDeleteOrder, deletingOrderId, completeOrder, deleteOrder]);

  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <>
      <table border={1} className={styles.table} cellSpacing={0} cellPadding={10}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <TablePagination table={table} />
    </>
  );
};

export default OrderListTable;