// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', 
  timeout: 1000, 
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
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

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/token/', credentials);
    return response;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const createUser = async (user) =>{
  try {
    const response = await api.post('/user/', user);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
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

export const createGasto = async (gasto) => {
  try {
    const response = await api.post(`/gasto/`, gasto);

    if(response.status === 200){
      console.log('Gasto criado com sucesso')
      return response.data

    }
    return response.data;
    
  } catch (error) {
    console.error('Erro ao criar gasto:', error);
    throw error;
  }
};

export const getCategories = async () => {

  try{
    const response = await api.get('/category/');
    return response.data;
  }catch(error){
    console.error('Erro ao obter categorias:', error);
    throw error;
  }
  
}


export default api;
