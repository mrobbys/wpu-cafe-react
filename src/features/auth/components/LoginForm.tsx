import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import styles from '../styles/login.module.css';

interface FormLoginProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
}

const LoginForm = ({ onSubmit, isPending }: FormLoginProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        label="Email"
        name="email"
        id="email"
        type="email"
        placeholder="Enter your email"
        required
        defaultValue="admin@wpucafe.com"
      />
      <Input
        label="Password"
        name="password"
        id="password"
        type="password"
        placeholder="Enter your password"
        required
        defaultValue="Admin123"
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
