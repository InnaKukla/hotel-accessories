import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const BasketSection = styled.section`
  display: flex;
  /* padding-top: 164px; */
  background-color: rgba(249, 249, 249, 1);
  /* max-width: 1280px; */
  min-width: 100vw;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ContainerBasket = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 960px;
  }
  @media screen and (max-width: 768px) {
    max-width: 720px;
  }
  @media screen and (max-width: 550px) {
    width: -webkit-fill-available;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const BasketWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductsList = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    gap: 20px;
    flex-direction: column;
    grid-template-columns: none;
  }
`;

export const BasketProductsItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 15px;
  background-color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    /* display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(255, 255, 255, 1); */
    /* flex-direction: column;
    gap: 10px; */
    min-width: 100%;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductItemWrap = styled.div`
  display: flex;
  padding-top: 21px;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    padding: 10px 0;
    display: flex;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 550px) {
    flex-grow: 1;
    min-width: 0;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductItemImg = styled.img`
  display: flex;
  max-width: 340px;
  height: 100%;

  @media screen and (max-width: 1024px) {
    max-height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    min-width: 0;
    min-height: 0;
    width: auto;
    max-height: 150px;
  }
  @media screen and (max-width: 550px) {
    max-width: 100%;
    max-height: 100%;
    /* height: 100%; */
    width: 100%;
    /* height: auto; */
    object-fit: contain;
    flex-shrink: 0;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductItemDescription = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BasketProductItemCode = styled.div`
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

  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 550px) {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductItemTitle = styled.p`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(35, 81, 96, 1);
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  &:hover {
    -webkit-line-clamp: none;
  }
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 100%;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 550px) {
    -webkit-line-clamp: 2;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductItemPrice = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: rgba(35, 81, 96, 0.8);
  margin-top: 10px;
  margin-bottom: 89px;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    line-height: 48px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 550px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
    line-height: 48px;
    margin-bottom: 30px;
  }
`;

export const BasketProductChooseForBuyWrap = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    gap: 15px;
    padding-bottom: 0;
  }
  @media screen and (max-width: 550px) {
    gap: 30px;
    padding-bottom: 20px;
    flex-grow: 1;
    min-width: 0;
  }
  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;

export const BasketProductChooseForBuyDozen = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 1024px) {
    /* width: 130px; */
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductDozenQuantityWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(235, 235, 235, 1);
  font-family: Helvetica;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;

  width: 150px;
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
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    width: 100px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductChooseForBuySize = styled.div`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(35, 81, 96, 1);
  display: flex;
  flex-direction: column;
  width: 150px;
  div {
    padding: 9px;
    background-color: rgba(235, 235, 235, 1);
    display: flex;
    height: 100%;
    align-items: center;
    gap: 5px;
  }
  p {
    line-height: 24px;
  }

  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 150%; */
    color: rgba(35, 81, 96, 1);
    display: flex;
    flex-direction: column;
    line-height: 150%;
    width: 120px;
    div {
      padding: 9px;
      background-color: rgba(235, 235, 235, 1);
      display: flex;
      gap: 5px;
    }
    p {
      line-height: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 150%; */
    color: rgba(35, 81, 96, 1);
    display: flex;
    flex-direction: column;
    line-height: 150%;
    div {
      padding: 5px 7px;
      background-color: rgba(235, 235, 235, 1);
      display: flex;
      gap: 5px;
    }
    p {
      line-height: 100%;
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductChooseForBuyColor = styled.div`
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

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(35, 81, 96, 0.7);
      line-height: 120%;
    }
    span {
      color: rgba(35, 81, 96, 1);
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(35, 81, 96, 0.7);
      line-height: 120%;
    }
    span {
      color: rgba(35, 81, 96, 1);
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductDeleteButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
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
  margin: auto;
  margin-left: 10px;
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
  @media screen and (max-width: 1024px) {
    margin: auto;
    margin-bottom: 50px;
    /* background-color: rgba(255, 255, 255, 1); */
    /* padding: 50px 0 40px 0; */
    h2 {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
      text-align: right;
      text-transform: uppercase;
      margin-bottom: 5px;
      color: rgba(255, 255, 255, 1);
      padding: 30px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: auto;
    margin-bottom: 50px;
    h2 {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
      text-align: right;
      text-transform: uppercase;
      margin-bottom: 5px;
      color: rgba(255, 255, 255, 1);
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketProductTotalPriceItem = styled.div`
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

  @media screen and (max-width: 1024px) {
    display: flex;
    margin-right: 21px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    h2 {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      text-align: right;
      text-transform: uppercase;
      color: rgba(38, 144, 0, 1);
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    margin-right: 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 21px;
    margin-bottom: 10px;
    h2 {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      text-align: right;
      text-transform: uppercase;
      color: rgba(38, 144, 0, 1);
    }
  }
  @media screen and (max-width: 550px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketOrderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 150px;
  padding-top: 150px;
  flex-direction: row;
  flex-wrap: nowrap;
  min-width: 0;
  width: 100%;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    flex-direction: column-reverse;
    padding-bottom: 50px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    flex-direction: column-reverse;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketFormWrapper = styled.div`
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-grow: 1;
    min-width: 0;
    max-width: 500px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 550px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FormStyled = styled.div`
  padding-top: 60px;
  padding-right: 70px;
  padding-bottom: 40px;
  padding-left: 70px;
  background-color: rgba(255, 255, 255, 1);

  @media screen and (max-width: 1024px) {
    padding-top: 50px;
    padding-right: 60px;
    padding-bottom: 60px;
    padding-left: 60px;
    background-color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 768px) {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 50px;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 550px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

export const BasketFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketFormItem = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  justify-content: space-between;
  gap: 68px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%;
    justify-content: space-between;
    gap: 15px;
  }
  @media screen and (max-width: 550px) {
    gap: 10px;
  }
  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`;

export const BasketFormItemText = styled(Typography)`
  padding-top: 0;
  opacity: 100%;

  @media screen and (max-width: 1024px) {
    padding-top: 5px;
    opacity: 50%;
  }
  @media screen and (max-width: 768px) {
    padding-top: 5px;
    opacity: 50%;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const BasketTextField = styled(TextField)`
  & .MuiFormControl-root {
    min-width: 700px;
  }
  & .MuiOutlinedInput-input {
    padding: 16.5px 14px;
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

  @media screen and (max-width: 1024px) {
    & .MuiOutlinedInput-input {
      padding: 5px 14px;
    }

    &.MuiFormControl-root {
      min-width: 600px;
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
  @media screen and (max-width: 768px) {
    & .MuiOutlinedInput-input {
      padding: 5px 14px;
    }

    &.MuiFormControl-root {
      min-width: 470px;
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
  @media screen and (max-width: 550px) {
    &.MuiFormControl-root {
      min-width: 400px;
    }
  }
  @media screen and (max-width: 480px) {
    &.MuiFormControl-root {
      min-width: 320px;
    }
  }
`;

export const BasketFormButton = styled.button`
  width: 100%;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  background-color: rgba(35, 81, 96, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 49px;
  padding: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 49px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 49px;
  }
  @media screen and (max-width: 480px) {
  }
`;
