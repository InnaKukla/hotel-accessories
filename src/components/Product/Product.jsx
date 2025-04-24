import React, { useEffect, useState } from "react";
import { Container } from "../Header/Header.styled";
import { Link, useParams, useNavigate } from "react-router";
import productsOperations from "../../redux/products/products-operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOneProduct,
  selectProductsLoading,
} from "../../redux/products/products-selectors";
import favoritesOperations from "../../redux/favorites/favorites-operations";

import {
  ProductButton,
  ProductButtonAdd,
  ProductButtonTrolley,
  ProductButtonWrap,
  ProductInformationWrapper,
  ProductInformCodeWrap,
  ProductInformColor,
  ProductInformColorWrap,
  ProductInformDescriptionLine,
  ProductInformDescriptionMainText,
  ProductInformDescriptionText,
  ProductInformDescriptionWrap,
  ProductInformImg,
  ProductInformImgWrap,
  ProductInformName,
  ProductInformPrice,
  ProductInformSet,
  ProductInformSize,
  ProductSection,
  ProductWrapper,
} from "./Product.styled";
import CodeIcon from "../../assets/icons/code-icon.svg";
import Loader from "../../shared/Loader/Loader";
import ProductNavLinks from "../../shared/ProductNavLinks/ProductNavLinks";
import { ReactComponent as Favorite } from "../../assets/icons/Favorite.svg";
import { getUser, isUserLogin } from "../../redux/auth/auth-selectors";
import { selectFavoritesIsFavorite } from "../../redux/favorites/favorites-selectors";
import cartOperations from "../../redux/cart/cart-operations";

const Product = () => {
  const navigate = useNavigate();
  const isFavorite = useSelector(selectFavoritesIsFavorite);
  const [isFavoriteProduct, setIsFavoriteProduct] = useState(isFavorite);
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(isUserLogin);

  const { id } = useParams();

  const dispatch = useDispatch();
  const loading = useSelector(selectProductsLoading);
  const product = useSelector(selectOneProduct);

  // useEffect(() => {
  //   const fetch = async () => {
  //     await dispatch(productsOperations.fetchOneProduct({ id }));
  //     await dispatch(favoritesOperations.fetchOneFavorites(id));
  //   };
  //   fetch();
  //   setIsFavoriteProduct(isFavorite);
  //   window.scrollTo({ top: 0, behavior: "smooth" });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    const fetch = async () => {
      await dispatch(productsOperations.fetchOneProduct({ id }));
      await dispatch(favoritesOperations.fetchOneFavorites(id));
    };
    fetch();
    setIsFavoriteProduct(isFavorite);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, id, isFavorite]);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      navigate(`/account`);
    } else {
      await dispatch(
        cartOperations.addCartProduct({ productId: id, quantity: 1 })
      );
      navigate(`/basket`, { state: { id: id } });
    }
  };

  const handleFavorite = async () => {
    if (!isLoggedIn) {
      navigate(`/account`);
    }
    if (isLoggedIn) {
      if (isFavorite) {
        await dispatch(favoritesOperations.deleteFavorite(id));
        await dispatch(favoritesOperations.fetchOneFavorites(id));
      } else {
        const data = {
          userId: user.id,
          productId: id,
        };

        await dispatch(favoritesOperations.addFavorite(data));
        await dispatch(favoritesOperations.fetchOneFavorites(id));
      }
      // navigate(`/favorites`);
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ProductSection>
          <Container>
            <ProductNavLinks item={product} page="product" />
            {/* {loading ? (
              <Loader />
            ) : ( */}
              <ProductWrapper>
                <ProductInformationWrapper>
                  <ProductInformImgWrap>
                    <ProductInformImg src={product?.image} alt="product" />
                  </ProductInformImgWrap>

                  <div>
                    <div>
                      <ProductInformCodeWrap>
                        <img
                          src={CodeIcon}
                          alt="Code Icon"
                          width={12}
                          height={13}
                        />
                        <p>{product.code}</p>
                      </ProductInformCodeWrap>

                      <ProductInformName>{product.name}</ProductInformName>
                      <ProductInformColorWrap>
                        <ProductInformColor>
                          Color: <span>{product.color?.join(", ")}</span>
                        </ProductInformColor>
                        <div style={{ display: "flex", gap: "5px" }}>
                          {product.color?.map((color) => (
                            <div
                              key={color}
                              style={{
                                width: "15px",
                                height: "15px",
                                backgroundColor: `${color}`,
                                marginBottom: "5px",
                                border: "1px solid",
                              }}
                            ></div>
                          ))}
                        </div>
                      </ProductInformColorWrap>

                      <ProductInformSize>
                        Size: <span>{product.size}</span>
                      </ProductInformSize>
                      <ProductInformSet>
                        Set: <span>{product.size}</span>
                      </ProductInformSet>

                      <ProductInformPrice>${product.price}</ProductInformPrice>
                      <ProductButtonWrap>
                        <ProductButton onClick={handleAddToCart}>
                          <ProductButtonAdd style={{ display: "flex" }}>
                            <p>Add to cart</p>
                          </ProductButtonAdd>
                        </ProductButton>

                        <ProductButtonTrolley
                          isactive={isFavoriteProduct ? true : undefined}
                          onClick={handleFavorite}
                        >
                          <Favorite />
                        </ProductButtonTrolley>
                      </ProductButtonWrap>
                    </div>

                    <ProductInformDescriptionWrap>
                      <ProductInformDescriptionMainText>
                        DESCRIPTION
                      </ProductInformDescriptionMainText>
                      <ProductInformDescriptionLine />
                      <ProductInformDescriptionText>
                        {product.description}
                      </ProductInformDescriptionText>
                    </ProductInformDescriptionWrap>
                  </div>
                </ProductInformationWrapper>
              </ProductWrapper>
            {/* )} */}
          </Container>
        </ProductSection>
      )}
    </>
  );
};

export default Product;
