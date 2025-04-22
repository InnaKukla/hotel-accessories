import React, { useEffect, useState } from "react";
import {
  BasketProductsItem,
  BasketProductItemDescription,
  BasketProductItemWrap,
  BasketProductsList,
  BasketSection,
  BasketWrap,
  BasketProductItemCode,
  BasketProductItemTitle,
  BasketProductItemPrice,
  BasketProductChooseForBuyWrap,
  BasketProductChooseForBuyDozen,
  BasketProductChooseForBuySize,
  BasketProductChooseForBuyColor,
  BasketProductDozenQuantityWrap,
  BasketProductDeleteButton,
  BasketProductTotalPriceWrap,
  BasketProductTotalPriceItem,
  BasketFormWrapper,
  BasketFormBox,
  BasketTextField,
  BasketFormButton,
  BasketFormItem,
  FormStyled,
  BasketOrderWrapper,
  BasketProductItemImg,
  BasketFormItemText,
  ContainerBasket,
} from "./Basket.styled";
import { Container } from "../Header/Header.styled";
import { Link, useLocation} from "react-router";
import productsOperations from "../../redux/products/products-operations";
import cartOperations from "../../redux/cart/cart-operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOneProduct,
} from "../../redux/products/products-selectors";
import ProductNavLinks from "../../shared/ProductNavLinks/ProductNavLinks";
import Trash from "../../assets/icons/trash.svg";
import CodeIcon from "../../assets/icons/code-icon.svg";
import SizeIcon from "../../assets/icons/size-icon.svg";
import { Typography } from "@mui/material";
import Loader from "../../shared/Loader/Loader";
import formsOperations from "../../redux/forms/forms-operations";

import { getUser } from "../../redux/auth/auth-selectors";
import { selectCartLoading, selectCartsList } from "../../redux/cart/cart-selectors";

const Basket = () => {
  const user = useSelector(getUser);
  const [totalPrice, setTotalPrice] = useState(null);
  const location = useLocation();
  const { id } = location.state || {};
  const dispatch = useDispatch();
  const loading = useSelector(selectCartLoading);
  const product = useSelector(selectOneProduct);
  const cartList = useSelector(selectCartsList);
  const [order, setOrder] = useState([]);

  
  useEffect(() => {
    dispatch(cartOperations.fetchCartProducts(user?.id));
  }, [dispatch, user?.id]);

  useEffect(() => {
    const total = cartList.reduce(
      (total, item) =>
        total + Number(item.product?.price?.replace(",", ".")) * item.quantity,
      0
    );

    setTotalPrice(parseFloat(total.toFixed(2)));
    setOrder(
      cartList.map((item) => ({
        image: item.product?.image,
        code: item.product?.code,
        name: item.product?.name,
        size: item.product?.size,
        color: item.product?.color,
        price: Number(item.product?.price?.replace(",", ".")),
        quantity: item.quantity,
      }))
    );
  }, [cartList]);

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    comment: "",
  });

  const [fieldValidity, setFieldValidity] = useState({
    companyName: null,
    name: null,
    email: null,
    phone: null,
    address: null,
    comment: null,
  });
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateQuantity = async (type, productId, newQuantity) => {
    let quantity;
    if (type === "minus") {
      quantity = newQuantity - 1;
    }

    if (type === "plus") {
      quantity = newQuantity + 1;
    }

    await dispatch(cartOperations.updateCartQuantity({ productId, quantity }));
    await dispatch(cartOperations.fetchCartProducts(user._id));
  };

  const handleRemoveFromCart = async (productId) => {
    await dispatch(cartOperations.deleteProduct(productId));
    await dispatch(cartOperations.fetchCartProducts(user._id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(
        formsOperations.sendOrderForm({
          products: order,
          ...formData,
          totalPrice,
        })
      );
      await dispatch(cartOperations.clearCart());
    } catch (error) {
      console.log(error.message);
    }
    setIsEmailTouched(false);
    resetForm();
   
    setIsEmailTouched(false);
    resetForm();
  };

  const resetForm = () => {
    document.getElementById("form-basket").reset();
    setFormData({
      companyName: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    });

    setFieldValidity({
      companyName: null,
      name: null,
      email: null,
      phone: null,
      address: null,
      comment: null,
    });
  };

  useEffect(() => {
    if (id) {
      const fetchProducts = async () => {
       await dispatch(productsOperations.fetchOneProduct({ id }));
      }
      fetchProducts();
    }
    
  }, [dispatch, id]);
  return (
    <>
        <BasketSection>
          <ContainerBasket>
            <ProductNavLinks item={product} page="basket" />
            <BasketWrap>
              <BasketProductsList>
                {cartList.length === 0 ? (
                  <p>Basket is empty.</p>
                ) : (
                  <>
                    {cartList?.map((item) => (
                      <BasketProductsItem key={item.product?._id}>
                        <div style={{display: "flex"}}>
                          <BasketProductItemImg
                            src={item?.product?.image}
                            alt={item.product?.name}
                            loading="lazy"
                          />
                        </div>
                        <BasketProductItemWrap>
                          <BasketProductItemDescription>
                            <BasketProductItemCode>
                              <img
                                src={CodeIcon}
                                alt="Code Icon"
                                width={12}
                                height={13}
                              />
                              <p>{item.product?.code}</p>
                            </BasketProductItemCode>
                            <Link to={`/products/${item.product?._id}`}>
                              <BasketProductItemTitle>
                                {item.product?.name}
                              </BasketProductItemTitle>
                            </Link>
                            <BasketProductItemPrice>
                              $
                              {Number(item.product?.price?.replace(",", ".")) ||
                                0}
                            </BasketProductItemPrice>
                            <BasketProductChooseForBuyWrap>
                              <BasketProductChooseForBuyDozen>
                                <p>dozen</p>
                                <BasketProductDozenQuantityWrap>
                                  <button
                                    onClick={
                                      () =>
                                        handleUpdateQuantity(
                                          "minus",
                                          item.product?._id,
                                          item.quantity
                                        )}
                                  >
                                    -
                                  </button>
                                  {item.quantity}
                                  <button
                                    onClick={
                                      () =>
                                        handleUpdateQuantity(
                                          "plus",
                                          item.product?._id,
                                          item.quantity
                                        )}>
                                    +
                                  </button>
                                </BasketProductDozenQuantityWrap>
                              </BasketProductChooseForBuyDozen>

                              <BasketProductChooseForBuySize>
                                <span>size</span>
                                <div>
                                  <img src={SizeIcon} alt="Size Icon" width={12} loading="lazy"/>
                                  <p>{item.product?.size}</p>
                                </div>
                              </BasketProductChooseForBuySize>

                              <BasketProductChooseForBuyColor>
                                <span>color</span>
                                <p>{item.product?.color?.join(", ")}</p>
                              </BasketProductChooseForBuyColor>
                            </BasketProductChooseForBuyWrap>
                          </BasketProductItemDescription>

                          <BasketProductTotalPriceItem>
                            <BasketProductDeleteButton
                              onClick={() =>
                                handleRemoveFromCart(item?.product?._id)
                              }
                            >
                              <img src={Trash} alt="Trash" loading="lazy"/>
                            </BasketProductDeleteButton>
                            <h2>
                              total price:{" "}
                              {(
                                Number(item.product?.price?.replace(",", ".")) *
                                item.quantity
                              ).toFixed(2)}
                              $
                            </h2>
                          </BasketProductTotalPriceItem>
                        </BasketProductItemWrap>
                      </BasketProductsItem>
                    ))}
                  </>
                )}
              </BasketProductsList>
            </BasketWrap>

            <BasketOrderWrapper>
              <BasketFormWrapper className="prefooter-form-wrapper">
                <BasketFormBox
                  component="form"
                  id="form-basket"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <FormStyled>
                    <BasketFormItem>
                      <BasketFormItemText>Company Name</BasketFormItemText>
                      <BasketTextField
                        sx={{ minWidth: "650px" }}
                        autoComplete="Company Name"
                        id="Company Name"
                        //   label="Company Name"
                        name="companyName"
                        variant="outlined"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </BasketFormItem>

                    <BasketFormItem>
                      <BasketFormItemText>Purchasing Contact Name</BasketFormItemText>
                      <BasketTextField
                        sx={{ minWidth: "650px" }}
                        autoComplete="Purchasing Contact Name"
                        id="Purchasing Contact Name"
                        //   label="Purchasing Contact Name"
                        name="name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </BasketFormItem>

                    <BasketFormItem>
                      <BasketFormItemText>Purchasing Contact Email</BasketFormItemText>
                      <BasketTextField
                        sx={{ minWidth: "650px" }}
                        autoComplete="Purchasing Contact Email"
                        id="Purchasing Contact Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </BasketFormItem>

                    <BasketFormItem>
                      <BasketFormItemText>Phone</BasketFormItemText>
                      <BasketTextField
                        sx={{ minWidth: "650px" }}
                        autoComplete="Phone"
                        id="phone"
                        name="phone"
                        type="phone"
                        variant="outlined"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </BasketFormItem>

                    <BasketFormItem>
                      <BasketFormItemText>Address</BasketFormItemText>
                      <BasketTextField
                        sx={{ minWidth: "650px" }}
                        autoComplete="Address"
                        id="Address"
                        name="address"
                        type="address"
                        variant="outlined"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </BasketFormItem>

                    <BasketFormItem>
                      <BasketFormItemText>Сomment</BasketFormItemText>
                      <BasketTextField
                        sx={{ minWidth: "650px" }}
                        autoComplete="Сomment"
                        id="Сomment"
                        name="comment"
                        variant="outlined"
                        value={formData.comment}
                        onChange={handleChange}
                      />
                    </BasketFormItem>
                  </FormStyled>
                  <BasketFormButton type="submit">Send Order</BasketFormButton>
                </BasketFormBox>
              </BasketFormWrapper>

              <BasketProductTotalPriceWrap>
                <div
                  style={{
                    backgroundColor: "rgba(35, 81, 96, 1)",
                    margin: "auto",
                  }}
                >
                  <h2>
                    total price:{" "}
                    {cartList
                      .reduce(
                        (total, item) =>
                          total +
                          Number(item.product?.price?.replace(",", ".")) *
                            item.quantity,
                        0
                      )
                      .toFixed(2)}{" "}
                    $
                  </h2>
                </div>
              </BasketProductTotalPriceWrap>
            </BasketOrderWrapper>
          </ContainerBasket>
        </BasketSection>
    </>
  );
};

export default Basket;
