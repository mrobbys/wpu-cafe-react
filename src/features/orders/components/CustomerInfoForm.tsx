import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import styles from '../styles/CreateOrder.module.css';
import { tables } from '../constants/CreateOrder.constants';

const CustomerInfoForm = () => {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Customer Information</h2>
        <Link to="/orders">
          <Button color="secondary" type="button">Cancel</Button>
        </Link>
      </div>
      <div className={styles.input}>
        <Input
          id="name"
          label="Name"
          name="customerName"
          placeholder="Insert Name"
          required
        />
        <Select
          name="tableNumber"
          id="table"
          label="Table Number"
          options={tables}
        />
      </div>
    </div>
  );
};

export default CustomerInfoForm;
