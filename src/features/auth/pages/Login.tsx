import useLoginHandlers from '../hooks/useLoginHandlers';
import styles from '../styles/login.module.css';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const { handleLogin, isPending, error, isError } = useLoginHandlers();

  return (
    <main className={styles.login}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        {isError && error && (
        <p className={styles['text-error']} role="alert">
            {error.message || 'Login failed'}
          </p>
        )}

        <LoginForm onSubmit={handleLogin} isPending={isPending} />
      </div>
    </main>
  );
};

export default Login;
