export const setAuthTokenUser = (token: string) => {
  localStorage.setItem('AdminAuthToken', token);
};

export const getAuthTokenUser = () => {
  if (typeof window == 'undefined') {
    return false
  }
  console.log('localstorage',  localStorage.getItem('AdminAuthToken'));
  
  return localStorage.getItem('AdminAuthToken') || false;
};

export const RemoveToken = () => {
  if (typeof window == 'undefined') {
    return false
  }
  localStorage.removeItem('AdminAuthToken');
}
