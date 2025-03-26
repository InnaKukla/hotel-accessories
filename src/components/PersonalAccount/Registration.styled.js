import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const RegistrationSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    background-color: rgba(249, 249, 249, 1);
  }
`;

export const Form = styled.form`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

export const RegistrationWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-align: start;
    max-width: 654px;
    color: rgba(35, 81, 96, 1);
    /* margin-bottom: 40px; */
    margin: auto;
  }
`;

export const PersonalAccountPartsWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const PersonalAccountPartsText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 50%;
    text-align: center;
    background-color: ${(props) =>
      props.isactive ? " rgba(249, 249, 249, 1)" : "rgba(255, 255, 255, 1) "};
    color: rgba(35, 81, 96, 1);
    padding: 20px;
    cursor: pointer;
  }
`;

export const RegistrationPart = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-align: start;
    max-width: 654px;
    color: rgba(35, 81, 96, 1);
    /* margin-bottom: 40px; */
    margin: auto;
  }
`;

export const RegistrationMainText = styled.h2`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 32px;
    line-height: 110.00000000000001%;
    text-align: center;

    color: rgba(35, 81, 96, 1);
    margin-bottom: 60px;
  }
`;

export const RegistrationFieldWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    span {
      color: rgba(227, 58, 36, 1);
    }
  }
`;

export const Label = styled(TextField)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* margin-top: 20px; */

    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border: 1px solid rgb(178, 171, 171) !important; // Змінює колір бордюру при фокусі
      }
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
      height: 60px;
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
  }
`;
