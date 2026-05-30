import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  children: ReactNode;
}

const Button = ({
  type = 'button',
  onClick,
  className,
  color = 'primary',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${className || ''} ${color ? styles[color] : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
