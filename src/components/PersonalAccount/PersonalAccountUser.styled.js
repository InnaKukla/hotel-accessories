import { Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";


export const PersonalAccountUserWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 50px;
  }
`;

export const PersonalAccountUserTitle = styled.h2`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 32px;
    line-height: 110.00000000000001%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 71px;
  }
`;

export const PersonalAccountUserButtonsWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const PersonalAccountUserButtons = styled.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    border: none;
    width: 297px;
    padding: 13px;
    justify-content: center;
    background-color: ${(props) =>
      props.isActive ? " rgba(35, 81, 96, 1)" : "rgba(255, 255, 255, 1) "};
    color: ${(props) =>
      props.isActive ? " rgba(255, 255, 255, 1)" : "rgba(35, 81, 96, 1)"};
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }
`;

export const PersonalAccountLogoutButton = styled.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    border: none;
    background: none;
    justify-content: center;
    margin-top: 40px;
    gap: 5px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

`;

export const ButtonBox = styled(Box)`
 background-color: ${(props) =>
  props.isdesbutton === "true" ? " rgba(0, 0, 0, 0.38)" : "rgba(35, 81, 96, 1)"};
 max-width: 200px;
 margin-top: 16px;
 text-align: center;

`;

export const ButtonSave = styled(Button)`
max-width: 200px;

&.MuiButtonBase-root {
  color: rgba(255, 255, 255, 1);
}

`;
