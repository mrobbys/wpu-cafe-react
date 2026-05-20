import useLoginMutation from './useLoginMutation';

function useLoginHandlers() {
  const { mutate: login, isPending, error, isError } = useLoginMutation();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      return;
    }

    const payload = {
      email,
      password,
    };

    login(payload);
  };

  return {
    handleLogin,
    isPending,
    error,
    isError,
  };
}

export default useLoginHandlers;
