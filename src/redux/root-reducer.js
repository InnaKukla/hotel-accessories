import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from "./products/products-slice";
import favoritesReducer from "./favorites/favorites-slice";
import authReducer from "./auth/auth-slice"; 
import cartReducer from "./cart/cart-slice";
import formReducer from "./forms/forms-slice" 
import { instance } from "../redux/instance"; // Імпортуємо axios instance


// Persist конфіг для auth
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token", "isLogin"],
};


// Persist конфіг для favorites (щоб улюблені зберігалися після перезавантаження)
const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"], // Зберігаємо тільки список товарів
};

// Persist конфіг для cart
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cartsList"], // Зберігаємо тільки товари
};

const formPersistConfig = {
  key: "form",
  storage,
  whitelist: ["ordersList"], // Зберігаємо тільки товари
};


// Додаємо persist для auth і favorites
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedFormReducer = persistReducer(formPersistConfig, formReducer);


// Додаємо interceptor для axios, щоб автоматично підставляти токен
instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("persist:auth"))?.token?.replace(/"/g, "");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  favorites: persistedFavoritesReducer,
  cart: persistedCartReducer,
  form: persistedFormReducer
});


export default rootReducer;