import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  instance.defaults.headers.common.authorization = `Bearer ${result.token}`;
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  instance.defaults.headers.common.authorization = `Bearer ${result.token}`;
  return result;
};

export const logout = async () => {
  const data = await instance.post('/users/logout');
  instance.defaults.headers.common.authorization = '';
  return data;
};

export const getCurrent = async token => {
  try {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    instance.defaults.headers.common.authorization = '';
    throw error;
  }
};

export default instance;
