import { Button, TextField } from "@mui/material";
import { Box, Grid } from "@mui/system";
import styled from "styled-components";

export const PersonalAccountWrap = styled.div`
  padding-bottom: 100px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 70px;
  }
  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`;


export const PersonalAccountUserWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountUserTitle = styled.h2`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 32px;
  line-height: 110.00000000000001%;
  color: rgba(35, 81, 96, 1);
  margin-bottom: 71px;
  @media screen and (max-width: 1024px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 32px;
    line-height: 110.00000000000001%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 71px;
  }
  @media screen and (max-width: 768px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 32px;
    line-height: 110.00000000000001%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 71px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountUserButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountUserButtons = styled.button`
  display: flex;
  align-items: center;
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
  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 480px) {
    height: 70px;
  }
`;

export const PersonalAccountLogoutButton = styled.button`
  display: flex;
  border: none;
  background: none;
  justify-content: center;
  margin-top: 40px;
  gap: 5px;
  text-decoration: none;
  p{
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 0;
    display: flex;
    border: none;
    background: none;
    justify-content: center;
    gap: 5px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    border: none;
    background: none;
    justify-content: center;
    gap: 5px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const UserInfoWrapper = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    gap: 10px;
  }
  width: 100%;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const UserInfoTextGrid = styled(Grid)`
  @media screen and (max-width: 1024px) {
    /* max-width: 400px; */
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    gap: 10px;
  }
`;

export const UserInfoTextField = styled(TextField)`
  @media screen and (max-width: 1024px) {
    /* max-width: 400px; */
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonBox = styled(Box)`
  background-color: ${(props) =>
    props.isdesbutton === "true"
      ? " rgba(0, 0, 0, 0.38)"
      : "rgba(35, 81, 96, 1)"};
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
