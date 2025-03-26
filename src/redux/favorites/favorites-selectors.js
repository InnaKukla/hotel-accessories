export const selectFavorites = state => state.favorites.favoritesList;
export const selectOneFavorite = state => state.favorites.oneFavorite;
export const selectFavoritesTotal = state => state.favorites.total;
export const selectFavoritesTotalPages = state => state.favorites.totalPages;
export const selectFavoritesLoading = state => state.favorites.isLoading;
export const selectFavoritesIsFavorite = state => state.favorites.isFavorite;