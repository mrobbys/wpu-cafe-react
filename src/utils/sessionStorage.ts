const storage = typeof window === 'undefined' ? null : window.sessionStorage;

const tokenSessionStorage = 'userToken';

export const setUserToken = (value: string) => {
  if (!storage) return null;
  return storage.setItem(tokenSessionStorage, value);
};

export const getUserToken = () => {
  if (!storage) return null;
  return storage.getItem(tokenSessionStorage);
};

export const destroyUserToken = () => {
  if (!storage) return null;
  return storage.removeItem(tokenSessionStorage);
};
