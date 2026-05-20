import type { ComponentPropsWithoutRef } from 'react';
import styles from './Select.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface Proptypes extends ComponentPropsWithoutRef<'select'> {
  label: string;
  id: string;
  options: SelectOption[];
}

const Select = ({ label, name, id, options }: Proptypes) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <select id={id} className={styles.select} name={name}>
        {options.map((option: { value: string; label: string }) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
