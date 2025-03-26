import { Box, TextField } from "@mui/material";
import styled from "styled-components";

export const PrefooterSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: block;
    padding-top: 200px;
    padding-bottom: 200px;

    /* background-image: url("/img/prefooterImg.jpg");
    background-position: 50% 50%;
    background-size: cover; */
  }
`;

export const PrefooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* flex-direction: column;
    flex-wrap: nowrap; */
    display: grid;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    
  }
`;

export const PrefooterTextWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-left: 11px;
  }
`;

export const PrefooterMainText = styled.h2`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 64px;
    line-height: 70.4px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 40px;
  }
`;

export const PrefooterText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    max-width: 461px;
    margin-top: 108px;
    margin-left: auto;
    font-family: Helvetica;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: rgba(70, 70, 70, 1);
  }
`;

export const PrefooterFormWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-right: 70px;
    padding-bottom: 40px;
    padding-left: 70px;
    background-color: rgba(255, 255, 255, 1);
    /* width: 40%;
    margin-left: auto;
    margin-right: -20px; */
  }
`;

export const PrefooterFormBox = styled(Box)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const PrefooterTextField = styled(TextField)`
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 49px;
  }
`;

// export const PrefooterWrapper = styled.div`
//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1280px) {
//     display: flex;
//     background-image: url("/img/prefooterImg.jpg");
//     background-position: 50% 50%;
//     background-size: cover;
//   }
// `;

