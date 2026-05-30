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
        {isPending ? (
          <>
            <svg
              className={styles.spinner}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            <span>Logging in...</span>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.buttonIcon}
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" x2="3" y1="12" y2="12" />
            </svg>
            <span>Login</span>
          </>
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
