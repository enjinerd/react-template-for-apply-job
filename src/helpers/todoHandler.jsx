import axiosClient from './axiosClient';

export function fetchTodos() {
  return axiosClient.get('/hanabyan/todo/1.0.0/to-do-list').then((response) => response.data);
}
