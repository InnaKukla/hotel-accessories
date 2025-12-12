import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../instance";

const fetchCartProducts = createAsyncThunk(
  "fetchCartProducts /fetch",
  async (userId, thunkApi) => {
    console.log(userId);

    try {
      const response = await instance.get("/cart/list", { userId });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

// const fetchOneFavorites = createAsyncThunk(
//   'fetchOneFavorites /fetchOneFavorites',
//   async ( productId , thunkApi) => {

//     try {
//       const response = await instance.get(`/favorites/${productId}`);

//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.response.data.message);
//     }
//   }
// );

const addCartProduct = createAsyncThunk(
  "addCartProduct/post",
  async (data, thunkApi) => {
    try {
      const response = await instance.post("/cart/add", data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const updateCartQuantity = createAsyncThunk(
  "updateCartQuantity/put",
  async (data, thunkApi) => {
    try {
      const response = await instance.put("/cart/update", data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
const deleteProduct = createAsyncThunk(
  "deleteProduct /delete",
  async (id, thunkApi) => {
    try {
      const response = await instance.delete(`/cart/remove`, {data: {productId: id}});

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const clearCart = createAsyncThunk(
  "clearCart /delete",
  async (id, thunkApi) => {
    try {
      const response = await instance.delete("/cart/clear", {});

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const cartOperations = {
  fetchCartProducts,
  // fetchOneFavorites,
  addCartProduct,
  updateCartQuantity,
  deleteProduct,
  clearCart,
};

export default cartOperations;
