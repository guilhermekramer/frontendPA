// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exemplo.com', 
  timeout: 1000, 
});

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter usuário com id ${id}:`, error);
    throw error;
  }
};


export default api;
