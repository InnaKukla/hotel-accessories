import { createAsyncThunk } from '@reduxjs/toolkit';

import  {instance}  from '../instance';

const fetchAllProducts = createAsyncThunk(
    'allProducts /fetch',
    async ({page}, thunkApi) => {
      
      try {
        const response = await instance.get(`/products`, {
          params: {
            page
          },
        });
  
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  );

  const fetchOneProduct = createAsyncThunk(
    'oneProduct/fetch',
    async ({ id }, thunkApi) => {
  console.log(id);
  
      try {
        const response = await instance.get(`/products/${id}`);
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  );
  const fetchProductsByCategory = createAsyncThunk(
    'allProductsByCategory /fetch',
    async (category, thunkApi) => {
      
      try {
        const response = await instance.get(`/products/category/${category}`, {
        });
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  );
  const productsOperations = {
    fetchAllProducts,
    fetchOneProduct,
    fetchProductsByCategory
  };
  
  export default productsOperations;
  