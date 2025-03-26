import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../authService";
import { persistor } from "../store";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    console.log(data);

    try {
      const result = await api.registerUser(data);
      // toasty.toastSuccess('Request resent successfully');
      localStorage.setItem("token", data.token);
      return result;
    } catch (error) {
      if (error.response.status === 409) {
        return rejectWithValue("User with the same email already exists");
      }

      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.loginUser(data);
      return result;
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        return rejectWithValue(
          "Your login or password is incorrect or your account is blocked. Please input correct credentials or contact your manager"
        );
      }
      if (error && error.response && error.response.status === 505) {
        return rejectWithValue(
          "The server is currently unable. Please try again later."
        );
      }
      return rejectWithValue("Please try again");
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/update",
  async (formData, { rejectWithValue, getState }) => {
    const { auth } = getState();

    try {
      const result = await api.updateUser(formData, auth.token);
      return result;
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        return rejectWithValue(
          "Your login or password is incorrect or your account is blocked. Please input correct credentials or contact your manager"
        );
      }
      if (error && error.response && error.response.status === 505) {
        return rejectWithValue(
          "The server is currently unable. Please try again later."
        );
      }
      return rejectWithValue("Please try again");
    }
  }
);

export const fetchOneUser = createAsyncThunk(
  "auth/fetchOneUser",
  async (id, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      console.log(auth.token);

      const result = await api.getOneUser(id, auth.token);
      return result;
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        return rejectWithValue(
          "Your login or password is incorrect or your account is blocked. Please input correct credentials or contact your manager"
        );
      }
      if (error && error.response && error.response.status === 505) {
        return rejectWithValue(
          "The server is currently unable. Please try again later."
        );
      }
      return rejectWithValue("Please try again");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (id, { rejectWithValue }) => {
    try {
      await api.logoutUser(id);
      return;
    } catch ({ response }) {
      if (response && response.status !== 401) {
        return rejectWithValue(response?.data?.message || "Please try again");
      }
      return;
    }
  }
);
