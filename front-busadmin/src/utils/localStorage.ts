export const setAuthTokenUser = (token: string) => {
  localStorage.setItem('AdminAuthToken', token);
};

export const getAuthTokenUser = () => {
  const token = JSON.parse((localStorage.getItem('AdminAuthToken') as any));
  return String(token);
};

export const RemoveToken = () => {
  if (typeof window == 'undefined') {
    return false
  }
  localStorage.removeItem('AdminAuthToken');
}
