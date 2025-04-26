import { Box, TextField } from "@mui/material";
import styled from "styled-components";

export const PrefooterSection = styled.section`
  padding-top: 150px;
  padding-bottom: 100px;
  background-color: rgba(249, 249, 249, 1);
  min-width: 100vw;
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    
  }
`;

export const PrefooterWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column-gap: 40px;
    grid-row-gap: 16px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column-gap: 40px;
    grid-row-gap: 16px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PrefooterTextWrapper = styled.div`
  margin-left: 11px;
  margin-bottom: 150px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
   
        margin-bottom: 80px;
    
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PrefooterMainText = styled.h2`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 64px;
  line-height: 70.4px;
  color: rgba(35, 81, 96, 1);
  margin-bottom: 40px;
  @media screen and (max-width: 1024px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 40px;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const PrefooterText = styled.p`
  max-width: 461px;
  /* margin-top: 108px; */
  margin-left: auto;
  font-family: Helvetica;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: rgba(70, 70, 70, 1);
  @media screen and (max-width: 1024px) {
    margin-left: auto;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    padding-left: 30px;
    padding-right: 20px;
    /* margin-bottom: 70px; */
    /* width: 500px; */
    text-align: end;
  }
  @media screen and (max-width: 768px) {
    margin-left: auto;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    max-width: 80%;
    text-align: end;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const PrefooterFormWrapper = styled.div`
  padding-top: 60px;
    padding-right: 70px;
    padding-bottom: 40px;
    padding-left: 70px;
    background-color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
    padding-right: 60px;
    padding-bottom: 50px;
    padding-left: 60px;
    background-color: rgba(255, 255, 255, 1);
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    padding: 50px 40px;
  background-color: rgba(255, 255, 255, 1);
  width: 80%;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const PrefooterFormBox = styled(Box)`

display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const PrefooterTextField = styled(TextField)`
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
  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 1280px) {
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

export const PrefooterFormButton = styled.button`
 width: 100%;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 49px;
    padding: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 49px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  background-color: rgba(35, 81, 96, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 49px;
  }
  @media screen and (max-width: 480px) {

  }
`;
