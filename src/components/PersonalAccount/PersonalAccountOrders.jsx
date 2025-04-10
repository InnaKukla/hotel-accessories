import dayjs from "dayjs";
import React, { useEffect } from "react";
import {
  PersonalAccountOrderCode,
  PersonalAccountOrderCodeWrap,
  PersonalAccountOrderDetailsItem,
  PersonalAccountOrderDetailsList,
  PersonalAccountOrderDetailsTextTitle,
  PersonalAccountOrderDetailsTitle,
  PersonalAccountOrderItem,
  PersonalAccountOrderList,
  PersonalAccountOrderText,
  PersonalAccountOrderTextWrap,
  PersonalAccountOrderTitle,
  PersonalAccountOrderTitleWrap,
} from "./PersonalAccountOrder.styled";
import CodeIcon from "../../assets/icons/code-icon.svg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-header.svg";
import SizeIcon from "../../assets/icons/size-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrdersList,
  selectOrdersLoading,
} from "../../redux/forms/forms-selectors";
import formsOperations from "../../redux/forms/forms-operations";
import Loader from "../../shared/Loader/Loader";

const PersonalAccountOrders = ({ orders }) => {
  const dispatch = useDispatch();
  // const orders = useSelector(selectOrdersList);
  const loading = useSelector(selectOrdersLoading);

  // useEffect(() => {
  //   const fetch = async () => {
  //     await dispatch(formsOperations.fetchOrders());
  //   };
  //   fetch()
  // }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <PersonalAccountOrderList>
            {orders.length === 0 ? (
              <p>You don't have any order.</p>
            ) : (
              <>
                {orders?.map((item) =>
                  item.products.map((product) => (
                    <>
                      <Accordion
                        sx={{
                          "& .MuiButtonBase-root": {
                            paddingLeft: 0,
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ArrowIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          sx={{
                            "& .MuiAccordionSummary-content": {
                              paddingRight: "25px",
                              margin: 0,
                            },
                          }}
                        >
                          <PersonalAccountOrderItem>
                            <div style={{ display: "flex" }}>
                              <div style={{ display: "flex" }}>
                                <img
                                  src={product?.image}
                                  alt={product?.name}
                                  style={{ maxHeight: "110px" }}
                                />
                              </div>
                              <PersonalAccountOrderTitleWrap>
                                <PersonalAccountOrderCodeWrap>
                                  <img
                                    src={CodeIcon}
                                    alt="Code Icon"
                                    width={12}
                                    height={13}
                                  />
                                  <PersonalAccountOrderCode>
                                    {product.code}
                                  </PersonalAccountOrderCode>
                                </PersonalAccountOrderCodeWrap>

                                <PersonalAccountOrderTitle>
                                  {product.name}
                                </PersonalAccountOrderTitle>
                              </PersonalAccountOrderTitleWrap>
                            </div>

                            <PersonalAccountOrderTextWrap>
                              <PersonalAccountOrderText>
                                Dozen:
                                <span>{product.quantity}</span>
                              </PersonalAccountOrderText>

                              <PersonalAccountOrderText>
                                Size:
                                <img
                                  src={SizeIcon}
                                  alt="Size Icon"
                                  width={10}
                                  height={15}
                                />
                                <span> {product.size}</span>
                              </PersonalAccountOrderText>

                              <PersonalAccountOrderText>
                                Color:
                                <span> {product.color.join(", ")}</span>
                              </PersonalAccountOrderText>

                              <PersonalAccountOrderText>
                                Price:
                                <span>${product.price}</span>
                              </PersonalAccountOrderText>

                              <PersonalAccountOrderText>
                                Issue date:
                                <span>
                                  {dayjs(item.createdAt).format(
                                    "YYYY-MM-DD HH:mm"
                                  )}
                                </span>
                              </PersonalAccountOrderText>
                            </PersonalAccountOrderTextWrap>
                          </PersonalAccountOrderItem>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            padding: "0 25px 0 0",
                          }}
                        >
                          <div style={{ paddingLeft: "20px" }}>
                            <PersonalAccountOrderDetailsTitle>
                              Order details
                            </PersonalAccountOrderDetailsTitle>
                            <PersonalAccountOrderDetailsList>
                              <PersonalAccountOrderDetailsItem>
                                <PersonalAccountOrderDetailsTextTitle>
                                  Order number:
                                </PersonalAccountOrderDetailsTextTitle>
                                <span>{item._id}</span>
                              </PersonalAccountOrderDetailsItem>
                              <PersonalAccountOrderDetailsItem>
                                <PersonalAccountOrderDetailsTextTitle>
                                  {" "}
                                  Issue date:
                                </PersonalAccountOrderDetailsTextTitle>
                                <span>{item.createdAt}</span>
                              </PersonalAccountOrderDetailsItem>
                              <PersonalAccountOrderDetailsItem>
                                <PersonalAccountOrderDetailsTextTitle>
                                  Total price:
                                </PersonalAccountOrderDetailsTextTitle>
                                <span>{item.totalPrice}$</span>
                              </PersonalAccountOrderDetailsItem>
                            </PersonalAccountOrderDetailsList>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ))
                )}
              </>
            )}
          </PersonalAccountOrderList>
        </div>
      )}
    </div>
  );
};

export default PersonalAccountOrders;
