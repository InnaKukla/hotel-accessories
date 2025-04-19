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
  ProductInformDescriptionLine,
  ProductInformDescriptionMainText,
  ProductInformDescriptionText,
  ProductInformDescriptionWrap,
  ProductInformImg,
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

  useEffect(() => {
    dispatch(productsOperations.fetchOneProduct({ id }));
    dispatch(favoritesOperations.fetchOneFavorites(id));

    setIsFavoriteProduct(isFavorite);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(productsOperations.fetchOneProduct({ id }));
    dispatch(favoritesOperations.fetchOneFavorites(id));

    setIsFavoriteProduct(isFavorite);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, id, isFavorite]);

  const handleAddToCart = async () => {
    
    if (!isLoggedIn) {
      console.log(!isLoggedIn, "isLoggedIn");
      navigate(`/account`);
    } else {
      console.log(id);
      
      await dispatch(
        cartOperations.addCartProduct({ productId: id, quantity: 1 })
      );
      navigate(`/basket`, { state: { id: id }});
    }
  };

  const handleFavorite = async () => {
    if (!isLoggedIn) {
      console.log(!isLoggedIn, "isLoggedIn");
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
      navigate(`/favorites`);
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
            {loading ? (
              <Loader />
            ) : (
              <ProductWrapper>
                <ProductInformationWrapper>
                  <ProductInformImg>
                   {product.image && (
                     <img
                     src={product?.image}
                     alt="product"
                     style={{ maxWidth: "692px", maxHeight: "694px" }}
                   />
                   )}
                  </ProductInformImg>

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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          borderBottom: "1px solid rgba(35, 81, 96, 0.2)",
                          justifyContent: "space-between",
                        }}
                      >
                        <ProductInformColor>
                          Color: <span>{product.color?.join(", ")}</span>
                        </ProductInformColor>
                        <div style={{ display: "flex", gap: "5px" }}>
                          {product.color?.map((color) => (
                            <div
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
                      </div>

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
            )}
          </Container>
        </ProductSection>
      )}
    </>
  );
};

export default Product;
