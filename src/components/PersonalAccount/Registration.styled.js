import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const RegistrationSection = styled.section`
  background-color: rgba(249, 249, 249, 1);
  padding-bottom: 50px;
  min-width: 100vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 700px;
  margin: auto;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 500px;
  }
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
  @media screen and (max-width: 480px) {
    gap: 40px;
    max-width: 320px;
  }
`;

export const RegistrationWrapper = styled.div`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: start;
  /* max-width: 654px; */
  color: rgba(35, 81, 96, 1);
  /* margin-bottom: 40px; */
  margin: auto;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountPartsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountPartsText = styled.p`
  width: 50%;
  text-align: center;
  background-color: ${(props) =>
    props.isactive ? " rgba(249, 249, 249, 1)" : "rgba(255, 255, 255, 1) "};
  color: rgba(35, 81, 96, 1);
  padding: 20px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const RegistrationPart = styled.div`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: start;
  max-width: 654px;
  color: rgba(35, 81, 96, 1);
  /* margin-bottom: 40px; */
  margin: auto;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const RegistrationMainText = styled.h2`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 32px;
  line-height: 110.00000000000001%;
  text-align: center;

  color: rgba(35, 81, 96, 1);
  margin-bottom: 60px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const RegistrationFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 700px;
  span {
    color: rgba(227, 58, 36, 1);
  }
  @media screen and (max-width: 1024px) {
    
  }
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
`;

export const Label = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid rgb(178, 171, 171) !important; // Змінює колір бордюру при фокусі
    }
  }
.MuiInputLabel-root.Mui-focused{
  color:rgba(35, 81, 96, 1);
}
  .MuiOutlinedInput-root {
    font-family: Rebelton;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    height: 60px;
    color: rgba(35, 81, 96, 1);
  }

  .MuiInputLabel-root {
    font-family: Rebelton;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    height: 60px;
    color: rgba(35, 81, 96, 1);
    opacity: 0.2;
  }
  && {
    font-family: Rebelton;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    height: 40px;
    color: rgba(35, 81, 96, 1);
    /* margin-top: 20px; */

    .MuiFormHelperText-root.Mui-error {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 12px;
      font-family: Rebelton;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0.2px;
    }
  }
  @media screen and (max-width: 1024px) {
  
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    .MuiOutlinedInput-root {
    font-family: Rebelton;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    height: 60px;
    color: rgba(35, 81, 96, 1);
  }

  .MuiInputLabel-root {
    font-family: Rebelton;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    height: 40%;
    color: rgba(35, 81, 96, 1);
    opacity: 0.2;
  }
  && {
    font-family: Rebelton;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
    height: 40px;
    color: rgba(35, 81, 96, 1);
    /* margin-top: 20px; */

    .MuiFormHelperText-root.Mui-error {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 12px;
      font-family: Rebelton;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0.2px;
    }
  }
}
`;

export const RegistrationButton = styled(Button)`
  && {
      font-family: Rebelton;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      width: 100%;
      background-color: rgba(35, 81, 96, 1);
      margin-bottom: 40px;
      border-radius: 0%;
      padding: 14px 0;
    }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
