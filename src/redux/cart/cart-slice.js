import { createSlice } from "@reduxjs/toolkit";
import cartOperations from "./cart-operations";
import { logout } from "../auth/auth-operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartsList: [],
    oneProductCart: {},
    total: null,
    totalPages: null,
    // isFavorite: false,
    isLoading: false,
  },
  reducers: {
    clearCarts: (state) => {
      state.cartsList = [];
      state.total = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartOperations.fetchCartProducts.pending, handlePending)
      .addCase(cartOperations.fetchCartProducts.fulfilled, (state, action) => {
        state.cartsList = action.payload.cart;
        // state.total = action.payload.totalProducts;
        // state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(cartOperations.fetchCartProducts.rejected, handleRejected)

      .addCase(cartOperations.addCartProduct.pending, handlePending)
      .addCase(cartOperations.addCartProduct.fulfilled, (state, action) => {
        state.oneProductCart = action.payload.cart;
        state.isLoading = false;
      })
      .addCase(cartOperations.addCartProduct.rejected, handleRejected)

      .addCase(cartOperations.updateCartQuantity.pending, handlePending)
      .addCase(cartOperations.updateCartQuantity.fulfilled, (state, action) => {
        state.oneProductCart = action.payload.cart;
        state.isLoading = false;
      })
      .addCase(cartOperations.updateCartQuantity.rejected, handleRejected)
      // .addCase(favoritesOperations.fetchOneFavorites.pending, handlePending)
      // .addCase(
      //   favoritesOperations.fetchOneFavorites.fulfilled,
      //   (state, action) => {
      //     state.oneFavorite = action.payload.product;
      //     state.isLoading = false;
      //     state.isFavorite = action.payload.isFavorite
      //   }
      // )
      // .addCase(favoritesOperations.fetchOneFavorites.rejected, handleRejected)
      // .addCase(productsOperations.fetchProductsByCategory.pending, handlePending)
      // .addCase(productsOperations.fetchProductsByCategory.fulfilled, (state, action) => {
      //   state.productsList = action.payload.products;
      //     state.total = action.payload.totalProducts;
      //     state.isLoading = false;
      //     state.error = null;
      // })
      // .addCase(productsOperations.fetchProductsByCategory.rejected, handleRejected)

      // .addCase(cartOperations.deleteProduct.pending, handlePending)
      // .addCase(cartOperations.deleteProduct.fulfilled, (state, action) => {
      //   // const index = state.cartsList.find(
      //   //   item => {console.log(action.payload)
      //   //   }
      //   // );
      //   // state.cartsList.splice(index, 1);
      //   state.isLoading = false;
      //   state.error = false;
      // })
      // .addCase(cartOperations.deleteProduct.rejected, handleRejected)

      .addCase(cartOperations.clearCart.pending, handlePending)
      .addCase(cartOperations.clearCart.fulfilled, (state, action) => {
        state.cartsList = action.payload.cart;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(cartOperations.clearCart.rejected, handleRejected)
      .addCase(logout.fulfilled, (state, action) => {
        state.cartsList = [];
        state.oneProductCart = {};
        state.total = null;
        state.totalPages = null;
        // isFavorite: false,
        state.isLoading = false;
      });
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

export const { setError, clearCarts } = cartSlice.actions;

export default cartSlice.reducer;
