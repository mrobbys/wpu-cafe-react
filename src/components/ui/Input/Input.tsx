import type { ComponentPropsWithoutRef } from 'react';
import styles from './Input.module.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  id: string;
}

const Input = ({
  label,
  name,
  id,
  type = 'text',
  placeholder,
  required,
  defaultValue,
  ...props
}: InputProps) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <input
        type={type}
        name={name}
        id={id}
        className={styles.input}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        {...props}
      />
    </label>
  );
};

export default Input;
