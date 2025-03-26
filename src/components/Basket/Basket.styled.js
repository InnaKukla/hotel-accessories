import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const BasketSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    /* padding-top: 164px; */
    background-color: rgba(249, 249, 249, 1);
  }
`;

export const BasketWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BasketProductsList = styled.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
`;

export const BasketProductsItem = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 15px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const BasketProductItemWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    padding-top: 21px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const BasketProductItemDescription = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BasketProductItemCode = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-transform: capitalize;
      color: rgba(35, 81, 96, 1);
    }
  }
`;

export const BasketProductItemTitle = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 32px;
    line-height: 110.00000000000001%;
    letter-spacing: 0%;

    color: rgba(35, 81, 96, 1);
  }
`;

export const BasketProductItemPrice = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: rgba(35, 81, 96, 0.8);
    margin-top: 10px;
    margin-bottom: 89px;
  }
`;

export const BasketProductChooseForBuyWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 20px;
    padding-bottom: 20px;
  }
`;

export const BasketProductChooseForBuyDozen = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 150px;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: rgba(35, 81, 96, 1);
    }
  }
`;

export const BasketProductDozenQuantityWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(235, 235, 235, 1);
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    color: rgba(35, 81, 96, 1);

    button {
      width: 25px;
      height: 40px;
      border: none;
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: rgba(35, 81, 96, 1);
    }
  }
`;

export const BasketProductChooseForBuySize = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    display: flex;
    flex-direction: column;
    div {
      padding: 9px;
      background-color: rgba(235, 235, 235, 1);
      display: flex;
      gap: 5px;
    }
  }
`;

export const BasketProductChooseForBuyColor = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    gap: 10px;

    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(35, 81, 96, 0.7);
    }
    span {
      color: rgba(35, 81, 96, 1);
    }
  }
`;

export const BasketProductDeleteButton = styled.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

export const BasketProductTotalPriceWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin: auto;
    /* background-color: rgba(255, 255, 255, 1); */
    /* padding: 50px 0 40px 0; */
    h2 {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
      letter-spacing: 0%;
      text-align: right;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 1);
      /* padding-right: 20px; */
      padding: 40px;
    }
  }
`;

export const BasketProductTotalPriceItem = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    margin-right: 21px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    h2 {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
      letter-spacing: 0%;
      text-align: right;
      text-transform: uppercase;
      color: rgba(38, 144, 0, 1);
    }
  }
`;

export const BasketOrderWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 150px;
    padding-top: 150px;
  }
`;

export const BasketFormWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* margin-top: 50px;
    margin-bottom: 50px; */
    /* padding-top: 60px;
    padding-right: 70px;
    padding-bottom: 40px;
    padding-left: 70px;
    background-color: rgba(255, 255, 255, 1); */
  }
`;

export const FormStyled = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-right: 70px;
    padding-bottom: 40px;
    padding-left: 70px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const BasketFormBox = styled(Box)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    /* width: 70%; */
  }
`;

export const BasketFormItem = styled(Box)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: baseline;
    width: 100%;
    justify-content: space-between;
    gap: 68px;
  }
`;

export const BasketTextField = styled(TextField)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    & .MuiFormControl-root {
      min-width: 700px;
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
      border-bottom: 1px solid rgba(70, 70, 70, 1);
      border-radius: 0;
    }

    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-bottom: 1px solid rgba(70, 70, 70, 1);
    }
    & .MuiInputLabel-root.Mui-focused {
      color: rgba(70, 70, 70, 1);
    }
  }
`;

export const BasketFormButton = styled.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 49px;
  }
`;
