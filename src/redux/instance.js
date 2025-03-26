import axios from "axios";
import { store } from "./store";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// export const setToken = (token) => {
//   if (token) {
//     instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     console.log("Токен встановлено:", instance.defaults.headers.common["Authorization"]);
//   } else {
//     delete instance.defaults.headers.common["Authorization"];
//     console.log("Токен видалено");
//   }
// };

// Додаємо interceptor для всіх запитів
instance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token; // Отримуємо токен при кожному запиті

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
