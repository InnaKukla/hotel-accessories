import { createSlice } from '@reduxjs/toolkit';
import favoritesOperations from './favorites-operations';
import { logout } from '../auth/auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesList: [],
    oneFavorite: {},
    total: null,
    totalPages: null,
    isFavorite: false,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
    .addCase(logout.fulfilled, (state) => {
            state.favoritesList = [];
            state.oneFavorite = {};
            state.total = null;
            state.totalPages = null;
            state.isFavorite = false;
            state.isLoading = false;
          })
      .addCase(favoritesOperations.fetchAllFavorites.pending, handlePending)
      .addCase(
        favoritesOperations.fetchAllFavorites.fulfilled,
        (state, action) => {
          state.favoritesList = action.payload;
          // state.total = action.payload.totalProducts;
          // state.totalPages = action.payload.totalPages;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(favoritesOperations.fetchAllFavorites.rejected, handleRejected)

      .addCase(favoritesOperations.addFavorite.pending, handlePending)
      .addCase(
        favoritesOperations.addFavorite.fulfilled,
        (state, action) => {
          state.oneFavorite = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(favoritesOperations.addFavorite.rejected, handleRejected)


      .addCase(favoritesOperations.fetchOneFavorites.pending, handlePending)
      .addCase(
        favoritesOperations.fetchOneFavorites.fulfilled,
        (state, action) => {
          state.oneFavorite = action.payload.product;
          state.isLoading = false;
          state.isFavorite = action.payload.isFavorite
        }
      )
      .addCase(favoritesOperations.fetchOneFavorites.rejected, handleRejected)
      // .addCase(productsOperations.fetchProductsByCategory.pending, handlePending)
      // .addCase(productsOperations.fetchProductsByCategory.fulfilled, (state, action) => {
      //   state.productsList = action.payload.products;
      //     state.total = action.payload.totalProducts;
      //     state.isLoading = false;
      //     state.error = null;
      // })
      // .addCase(productsOperations.fetchProductsByCategory.rejected, handleRejected)

      .addCase(favoritesOperations.deleteFavorite.pending, handlePending)
      .addCase(favoritesOperations.deleteFavorite.fulfilled, (state, action) => {
        const index = state.favoritesList.findIndex(
          item => item._id === action.meta.arg
        );
        state.favoritesList.splice(index, 1);
        state.isLoading = false;
        state.error = false;
      })
      .addCase(favoritesOperations.deleteFavorite.rejected, handleRejected)

    //   .addCase(partnersOperations.connectExpert.pending, handlePending)
    //   .addCase(partnersOperations.connectExpert.fulfilled, (state, action) => {
    //     // state.partnersList;
    //     state.onePartner = action.payload;
    //     state.isLoading = false;
    //     state.error = null;
    //   })
    //   .addCase(partnersOperations.connectExpert.rejected, handleRejected)

    //   .addCase(enumsOperations.updateEnum.pending, handlePending)
    //   .addCase(enumsOperations.updateEnum.fulfilled, (state, action) => {
    //     const index = state.enumsList.findIndex(
    //       item => item._id === action.payload._id
    //     );
    //     state.oneEnum = action.payload;
    //     state.isLoading = false;
    //     state.error = false;
    //   })
    //   .addCase(enumsOperations.updateEnum.rejected, handleRejected)
      
    //   .addCase(
    //     enumsOperations.deleteEnum.pending,
    //     handlePending
    //   )
    //   .addCase(
    //     enumsOperations.deleteEnum.fulfilled,
    //     (state, action) => {
    //       const index = state.enumsList.findIndex(
    //         item => item._id === action.meta.arg
    //       );

    //       state.enumsList.splice(index, 1);
    //       state.isLoading = false;
    //       state.error = false;
    //     }
    //   )
    //   .addCase(
    //     enumsOperations.deleteEnum.rejected,
    //     handleRejected
    //   );
  },
});

export const { setError, partnersClearError } = favoritesSlice.actions;

export default favoritesSlice.reducer;
