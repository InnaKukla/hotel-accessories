import { createSlice } from "@reduxjs/toolkit";
import { register, login, updateUserProfile, fetchOneUser, logout } from "./auth-operations";


const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    isLogin: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    // logout: (state) => {
    //     state.user = {};
    //     state.token = "";
    //     state.isLogin = false;
    //     localStorage.removeItem("token"); // Видаляємо токен із localStorage
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(login.rejected, handleRejected)

          .addCase(updateUserProfile.pending, handlePending)
          .addCase(updateUserProfile.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoading = false;
            state.isLogin = true;
            state.error = null;
          })
          .addCase(updateUserProfile.rejected, handleRejected)

          .addCase(fetchOneUser.pending, handlePending)
          .addCase(fetchOneUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoading = false;
            state.isLogin = true;
            state.error = null;
          })
          .addCase(fetchOneUser.rejected, handleRejected)

          .addCase(logout.pending, handlePending)
          .addCase(logout.fulfilled, (state, action) => {
            state.user = {};
            state.token = null;
            state.isLoading = false;
            state.isLogin = false;
            state.error = null;
          })
          .addCase(logout.rejected, handleRejected)
    //     //   .addCase(partnersOperations.connectExpert.pending, handlePending)
    //     //   .addCase(partnersOperations.connectExpert.fulfilled, (state, action) => {
    //     //     // state.partnersList;
    //     //     state.onePartner = action.payload;
    //     //     state.isLoading = false;
    //     //     state.error = null;
    //     //   })
    //     //   .addCase(partnersOperations.connectExpert.rejected, handleRejected)

    //     //   .addCase(enumsOperations.updateEnum.pending, handlePending)
    //     //   .addCase(enumsOperations.updateEnum.fulfilled, (state, action) => {
    //     //     const index = state.enumsList.findIndex(
    //     //       item => item._id === action.payload._id
    //     //     );
    //     //     state.oneEnum = action.payload;
    //     //     state.isLoading = false;
    //     //     state.error = false;
    //     //   })
    //     //   .addCase(enumsOperations.updateEnum.rejected, handleRejected)

    //     //   .addCase(
    //     //     enumsOperations.deleteEnum.pending,
    //     //     handlePending
    //     //   )
    //     //   .addCase(
    //     //     enumsOperations.deleteEnum.fulfilled,
    //     //     (state, action) => {
    //     //       const index = state.enumsList.findIndex(
    //     //         item => item._id === action.meta.arg
    //     //       );

    //     //       state.enumsList.splice(index, 1);
    //     //       state.isLoading = false;
    //     //       state.error = false;
    //     //     }
    //     //   )
    //     //   .addCase(
    //     //     enumsOperations.deleteEnum.rejected,
    //     //     handleRejected
    //     //   );
  },
});

export const { setError, clearError } = authSlice.actions;

export default authSlice.reducer;
