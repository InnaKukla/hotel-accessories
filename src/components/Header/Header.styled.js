import { Button, MenuItem } from "@mui/material";
import { Link } from "react-router";
import styled from "styled-components";

export const HeaderWrap = styled.header`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: rgba(255, 255, 255, 1);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 29px;
    padding-bottom: 29px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 1440px;
    padding-right: 20px;
    padding-left: 20px;
    margin: auto;
  }
`;

export const HeaderWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* display: flex; */
    display: grid;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    align-content: start;
    grid-auto-flow: row dense;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    font-family: Rebelton;
  }
`;

export const HeaderAccessoriesList = styled.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* display: flex; */
    justify-content: flex-start;
    align-items: center;
    grid-column-gap: 55px;
    grid-row-gap: 55px;
  }
`;

export const HeaderCatalogButton = styled(Button)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    &.MuiButton-root {
      opacity: 0.5;
      font-family: Rebelton;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    
    }
  }
`;

export const HeaderAccessoriesItem = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
  }
`;

export const HeaderAccessoriesItemText = styled(MenuItem)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    &.MuiMenuItem-root {
      margin-right: 5px;
      opacity: 0.5;
      color: rgba(35, 81, 96, 1);
      font-family: Rebelton;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      
    }
    &.MuiMenuItem-root:hover{
      background: none;
      opacity: 100%;
      p{
        font-size: 16px;
        opacity: 100%;
      }
    }
  }
`;

export const HeaderAboutUs = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    opacity: 0.5;
    font-family: Rebelton;
    font-size: 16px;
    line-height: 22.4px;
    color: rgba(35, 81, 96, 1);
  }
`;

export const HeaderNavWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    grid-column-gap: 150px;
    grid-row-gap: 150px;
    margin-left: auto;
  }
`;

export const HeaderNav = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

export const HeaderNavLink = styled(Link)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    :hover {
      fill: rgb(35 81 96 / 80%);
    }
  }
`;
