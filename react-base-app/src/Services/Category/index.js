import axios from 'axios';

const baseURL = 'http://localhost:3003/categories'

const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data;
}

const update = async (id, product) => {
  const request = await axios.post(`${baseURL}/${id}`, product)
  return request.then(response => response.data);
}

const deleteItem = async (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(response => response.data);
}

const create = async (product) => {
  const response = await axios.post(baseURL, product)
  return response.data;
}


export default {
  create,
  update,
  getAll,
  deleteItem
}
