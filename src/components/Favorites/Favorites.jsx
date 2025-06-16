import React, { useEffect } from "react";
import { Container } from "../Header/Header.styled";
import {
  ContainerFavorites,
  FavoritesItemImg,
  FavoritesList,
  FavoritesSection,
  FavoritesTitle,
  FavoritesWrapper,
} from "./Favorites.styled";
import ProductNavLinks from "../../shared/ProductNavLinks/ProductNavLinks";
import { useDispatch, useSelector } from "react-redux";
import favoritesOperations from "../../redux/favorites/favorites-operations";
import { getUser } from "../../redux/auth/auth-selectors";
import {
  CatalogProductsBuyWrap,
  CatalogProductsItem,
  CatalogProductsItemTextCode,
  CatalogProductsItemTextName,
  CatalogProductsItemTextPrice,
  CatalogProductsItemTextWrap,
  CatalogProductsItemWrap,
} from "../Catalog/Catalog.styled";
import { Link, useNavigate } from "react-router";
import Trolley from "../../assets/icons/trolley.svg";
import {
  selectFavorites,
  selectFavoritesLoading,
} from "../../redux/favorites/favorites-selectors";
import { ReactComponent as Favorite } from "../../assets/icons/Favorite.svg";
import cartOperations from "../../redux/cart/cart-operations";
import Loader from "../../shared/Loader/Loader";

const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const favorites = useSelector(selectFavorites);
  const loading = useSelector(selectFavoritesLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) {
      navigate("/account");
    }
    dispatch(favoritesOperations.fetchAllFavorites(user?.id));
  }, [dispatch, navigate, user]);

  // useEffect(() => {
  //   const fetch = async () => {
  //     await dispatch(favoritesOperations.fetchAllFavorites(user?.id));
  //   };

  //   fetch();
  // }, [dispatch, user]);

  const handleRemoveFavorites = async (id) => {
    await dispatch(favoritesOperations.deleteFavorite(id));
  };

  const handleAddToCart = async (id) => {
    await dispatch(
      cartOperations.addCartProduct({ productId: id, quantity: 1 })
    );
  };

  return (
    <FavoritesSection>
      <ContainerFavorites>
        <ProductNavLinks page="favorites" />
        <FavoritesWrapper>
          <FavoritesTitle>Favorites</FavoritesTitle>
          {loading ? (
            <Loader />
          ) : (
            <>
              {user && (
                <FavoritesWrapper>
                  <FavoritesList>
                    {favorites && favorites.length > 0 ? (
                      favorites.map((item) => (
                        <CatalogProductsItem key={item._id}>
                          <div
                            style={{
                              position: "absolute",
                              right: "5px",
                              top: "5px",
                              cursor: "pointer",
                            }}
                            onClick={() => handleRemoveFavorites(item._id)}
                          >
                            <Favorite
                              style={{
                                fill: "rgba(35, 81, 96, 1)",
                                padding: "10px",
                              }}
                            />
                          </div>
                          <Link
                            to={`/products/${item._id}`}
                            style={{ display: "flex" }}
                            state={{ id: item._id }}
                          >
                            <FavoritesItemImg
                              src={item.image}
                              alt={item.name}
                            />
                          </Link>
                          <CatalogProductsItemWrap>
                            <Link to={`/products/${item._id}`}>
                              <CatalogProductsItemTextWrap>
                                <CatalogProductsItemTextCode>
                                  {item.category}
                                </CatalogProductsItemTextCode>
                                <CatalogProductsItemTextName>
                                  {item.name}
                                </CatalogProductsItemTextName>
                                <CatalogProductsItemTextPrice>
                                  {item.price}
                                </CatalogProductsItemTextPrice>
                              </CatalogProductsItemTextWrap>
                            </Link>
                            <Link to="/basket" state={{ id: item._id }} style={{backgroundColor: "rgba(35, 81, 96, 1)"}}>
                              <CatalogProductsBuyWrap
                                onClick={() => handleAddToCart(item._id)}
                              >
                                <img src={Trolley} alt="Trolley" />
                              </CatalogProductsBuyWrap>
                            </Link>
                          </CatalogProductsItemWrap>
                        </CatalogProductsItem>
                      ))
                    ) : (
                      <p>You don't add any products to favorites</p>
                    )}
                  </FavoritesList>
                </FavoritesWrapper>
              )}
            </>
          )}
        </FavoritesWrapper>
      </ContainerFavorites>
    </FavoritesSection>
  );
};

export default Favorites;
