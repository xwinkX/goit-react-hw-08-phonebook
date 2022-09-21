// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/books',
// });
import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/contacts${id}`);
  return result;
};
