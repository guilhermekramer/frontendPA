// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', 
  timeout: 1000, 
});
 
export const getUsers = async () => {

  try {
    const response = await api.get('/user/');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    throw error;
  }
}

export const getGastos = async () => {
  
    try {
      const response = await api.get('/gasto/');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter gastos:', error);
      throw error;
    }
}

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter usuário com id ${id}:`, error);
    throw error;
  }
};


export default api;
