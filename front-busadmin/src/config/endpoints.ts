export const ENDPOINTS = {
  login: 'auth/login',
  createUser: '/users',
  showDrivers: '/drivers/list',
  createDriver: '/drivers',
  updateDriver: (id: string) => `/drivers?id=${id}`,
};
