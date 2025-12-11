import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../instance";

const sendContactForm = createAsyncThunk(
  "sendContactForm /post",
  async (formData, thunkApi) => {
    try {
      const response = await instance.post(`form/contact`, formData);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const sendOrderForm = createAsyncThunk(
  "sendOrderForm/post",
  async (formData, thunkApi) => {
    console.log(formData);
    
    try {
      const response = await instance.post("form/order", formData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const fetchOrders = createAsyncThunk(
  "fetchOrders/fetch",
  async (_, thunkApi) => {
    try {
      const response = await instance.get("form/orders");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const formsOperations = {
  sendContactForm,
  sendOrderForm,
  fetchOrders
};

export default formsOperations;
