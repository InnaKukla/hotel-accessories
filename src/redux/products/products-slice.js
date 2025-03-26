import { createSlice } from '@reduxjs/toolkit';
import productsOperations from './products-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
    oneProduct: {},
    total: null,
    totalPages: null,
    isLoading: false,
    currentPage: null,
  },
  extraReducers: builder => {
    builder
      .addCase(productsOperations.fetchAllProducts.pending, handlePending)
      .addCase(
        productsOperations.fetchAllProducts.fulfilled,
        (state, action) => {
          state.productsList = action.payload.products;
          state.total = action.payload.totalProducts;
          state.totalPages = action.payload.totalPages;
          state.currentPage = action.payload.currentPage;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(productsOperations.fetchAllProducts.rejected, handleRejected)

      .addCase(productsOperations.fetchOneProduct.pending, handlePending)
      .addCase(
        productsOperations.fetchOneProduct.fulfilled,
        (state, action) => {
          state.oneProduct = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(productsOperations.fetchOneProduct.rejected, handleRejected)

      .addCase(productsOperations.fetchProductsByCategory.pending, handlePending)
      .addCase(productsOperations.fetchProductsByCategory.fulfilled, (state, action) => {
        state.productsList = action.payload.products;
        state.total = action.payload.totalProducts;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
          state.isLoading = false;
          state.error = null;
      })
      .addCase(productsOperations.fetchProductsByCategory.rejected, handleRejected)

    //   .addCase(partnersOperations.deletePartner.pending, handlePending)
    //   .addCase(partnersOperations.deletePartner.fulfilled, (state, action) => {
    //     const index = state.partnersList.findIndex(
    //       item => item._id === action.meta.arg
    //     );
    //     state.partnersList.splice(index, 1);
    //     state.isLoading = false;
    //     state.error = false;
    //   })
    //   .addCase(partnersOperations.deletePartner.rejected, handleRejected)

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

export const { setError, partnersClearError } = productsSlice.actions;

export default productsSlice.reducer;
