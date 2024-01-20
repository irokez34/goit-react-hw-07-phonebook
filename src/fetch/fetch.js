import axios from 'axios';
axios.defaults.baseURL = 'https://65abd6eafcd1c9dcffc71d90.mockapi.io/contacts';

export async function getContactsApi() {
  const response = await axios.get('/contacts');
  return response.data;
}

export const addNewContactApi = async data => {
  const response = await axios.post('/contacts', data);
  console.log(response.data);
  return response.data;
};

export const removeContactApi = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  console.log(response.data);
  return response.data;
};
