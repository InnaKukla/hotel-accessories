import { createAsyncThunk } from '@reduxjs/toolkit';

import  {instance}  from '../instance';

const fetchAllFavorites = createAsyncThunk(
    'fetchAllFavorites /fetch',
    async ( userId , thunkApi) => {
      console.log(userId);
      
      try {
        const response = await instance.get('favorites/list', {userId: userId} );
  
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  );


const fetchOneFavorites = createAsyncThunk(
  'fetchOneFavorites /fetchOneFavorites',
  async ( productId , thunkApi) => {
    
    try {
      const response = await instance.get(`favorites/one/${productId}`);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

  const addFavorite = createAsyncThunk(
    'addFavorite/post',
    async (data, thunkApi) => {
  
      try {
        const response = await instance.post('favorites/add', data );
        
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  );
  const deleteFavorite = createAsyncThunk(
    'deleteFavorite /delete',
    async (id, thunkApi) => {
      
      try {
        const response = await instance.delete(`favorites/remove${id}`, {
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
    deleteFavorite
  };
  
  export default favoritesOperations;
  