import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../instance";

const fetchAllFavorites = createAsyncThunk(
  "fetchAllFavorites /fetch",
  async (userId, thunkApi) => {
    try {
      const response = await instance.get("/favorites/list", { userId});

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const fetchOneFavorites = createAsyncThunk(
  "fetchOneFavorites /fetchOneFavorites",
  async (productId, thunkApi) => {
    try {
      const response = await instance.get(`/favorites/one`, 
        {
          params:
          {id: productId}
         }
      );

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const addFavorite = createAsyncThunk(
  "addFavorite/post",
  async (data, thunkApi) => {
    try {
      const response = await instance.post("/favorites/add", data, {
        headers:
        {
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
const deleteFavorite = createAsyncThunk(
  "removeFavorite /remove",
  async (id, thunkApi) => {
    console.log(id);
    
    try {
      const response = await instance.delete(`/favorites/remove`, {
        data: {productId: id}
      });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
const favoritesOperations = {
  fetchAllFavorites,
  fetchOneFavorites,
  addFavorite,
  deleteFavorite,
};

export default favoritesOperations;
