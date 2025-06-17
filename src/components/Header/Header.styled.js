import { Button, MenuItem } from "@mui/material";
import { Link } from "react-router";
import styled from "styled-components";

export const HeaderWrap = styled.header`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: rgba(255, 255, 255, 1);
  position: sticky;
  top: 0;
  z-index: 1500;
  min-width: 100vw;
`;

export const Container = styled.div`
  max-width: 1280px;

  padding: 0 20px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 960px;
  }
  @media screen and (max-width: 768px) {
    max-width: 720px;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: Rebelton;
  justify-items: center;
  @media (max-width: 1280px) {
  }

  @media (max-width: 1024px) {
    /* gap: 15px; */
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    display: flex;
  }
`;

export const HeaderAccessoriesList = styled.ul`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 55px;
`;

export const HeaderCatalogButton = styled(Button)`
  &.MuiButton-root {
    opacity: 0.5;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
  }
`;

export const HeaderAccessoriesItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`;

export const HeaderAccessoriesItemText = styled(MenuItem)`
  &.MuiMenuItem-root {
    margin-right: 5px;
    opacity: 0.5;
    color: rgba(35, 81, 96, 1);
    font-family: Rebelton;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }
  &.MuiMenuItem-root:hover {
    background: none;
    opacity: 1;
    p {
      font-size: 16px;
      opacity: 1;
    }
  }
`;

export const HeaderAboutUs = styled.p`
  opacity: 0.5;
  font-family: Rebelton;
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(35, 81, 96, 1);
  @media screen and (max-width: 1024px) {
    opacity: 0.5;
    font-family: Rebelton;
    font-size: 16px;
    line-height: 22.4px;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 768px) {
    opacity: 0.5;
    font-family: Rebelton;
    font-size: 16px;
    line-height: 22.4px;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const HeaderNavWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  gap: 150px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    gap: 39px;
  }
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
  }
  /* 


  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 150px;
  } */
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1280px) {
  }

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
  }
`;

export const HeaderNavLink = styled(Link)`
  svg {
    fill: ${({ $active }) => ($active ? "rgb(35 81 96 / 80%)" : "none")};
  }

  :hover {
    fill: rgb(35 81 96 / 80%);
  }
`;

// import { Button, MenuItem } from "@mui/material";
// import { Link } from "react-router";
// import styled from "styled-components";

// export const HeaderWrap = styled.header`
//   padding-top: 29px;
//   padding-bottom: 29px;
//   background-color: rgba(255, 255, 255, 1);
//   position: sticky;
//     top: 0;
//     z-index: 1000;
//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1280px) {
//     padding-top: 29px;
//     padding-bottom: 29px;
//     background-color: rgba(255, 255, 255, 1);
//   }
// `;

// export const Container = styled.div`
// width: 320px;
//     padding-right: 20px;
//     padding-left: 20px;
//     margin: auto;
//   @media screen and (min-width: 768px) {
//     width: 740px;
//     padding-right: 20px;
//     padding-left: 20px;
//     margin: auto;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1440px;
//     padding-right: 20px;
//     padding-left: 20px;
//     margin: auto;
//   }
// `;

// export const HeaderWrapper = styled.div`
//  display: grid;
//     justify-content: space-between;
//     justify-items: center;
//     align-items: center;
//     align-content: start;
//     grid-auto-flow: row dense;
//     grid-auto-columns: 1fr;
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: auto;
//     font-family: Rebelton;
//   @media screen and (min-width: 768px) {
//     display: grid;
//     justify-content: space-between;
//     justify-items: center;
//     align-items: center;
//     align-content: start;
//     grid-auto-flow: row dense;
//     grid-auto-columns: 1fr;
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: auto;
//     font-family: Rebelton;
//   }

//   @media screen and (min-width: 1280px) {
//     /* display: flex; */
//     display: grid;
//     justify-content: space-between;
//     justify-items: center;
//     align-items: center;
//     align-content: start;
//     grid-auto-flow: row dense;
//     grid-auto-columns: 1fr;
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: auto;
//     font-family: Rebelton;
//   }
// `;

// export const HeaderAccessoriesList = styled.ul`
//  justify-content: flex-start;
//     align-items: center;
//     grid-column-gap: 55px;
//     grid-row-gap: 55px;
//   @media screen and (min-width: 768px) {
//     justify-content: flex-start;
//     align-items: center;
//     grid-column-gap: 55px;
//     grid-row-gap: 55px;
//   }

//   @media screen and (min-width: 1280px) {
//     /* display: flex; */
//     justify-content: flex-start;
//     align-items: center;
//     grid-column-gap: 55px;
//     grid-row-gap: 55px;
//   }
// `;

// export const HeaderCatalogButton = styled(Button)`
// &.MuiButton-root {
//       opacity: 0.5;
//       font-family: Rebelton;
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 100%;
//       letter-spacing: 0%;
//       color: rgba(35, 81, 96, 1);

//     }
//   @media screen and (min-width: 768px) {
//     &.MuiButton-root {
//       opacity: 0.5;
//       font-family: Rebelton;
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 100%;
//       letter-spacing: 0%;
//       color: rgba(35, 81, 96, 1);

//     }
//   }

//   @media screen and (min-width: 1280px) {
//     &.MuiButton-root {
//       opacity: 0.5;
//       font-family: Rebelton;
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 100%;
//       letter-spacing: 0%;
//       color: rgba(35, 81, 96, 1);

//     }
//   }
// `;

// export const HeaderAccessoriesItem = styled.div`
// display: flex;
//     align-items: center;
//     cursor: pointer;
//     padding: 10px;
//   @media screen and (min-width: 768px) {

//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     padding: 10px;
//   }

//   @media screen and (min-width: 1280px) {
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     padding: 10px;
//   }
// `;

// export const HeaderAccessoriesItemText = styled(MenuItem)`
// &.MuiMenuItem-root {
//       margin-right: 5px;
//       opacity: 0.5;
//       color: rgba(35, 81, 96, 1);
//       font-family: Rebelton;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 100%;

//     }
//     &.MuiMenuItem-root:hover{
//       background: none;
//       opacity: 100%;
//       p{
//         font-size: 16px;
//         opacity: 100%;
//       }
//     }
//   @media screen and (min-width: 768px) {
//     &.MuiMenuItem-root {
//       margin-right: 5px;
//       opacity: 0.5;
//       color: rgba(35, 81, 96, 1);
//       font-family: Rebelton;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 100%;

//     }
//     &.MuiMenuItem-root:hover{
//       background: none;
//       opacity: 100%;
//       p{
//         font-size: 16px;
//         opacity: 100%;
//       }
//     }
//   }

//   @media screen and (min-width: 1280px) {
//     &.MuiMenuItem-root {
//       margin-right: 5px;
//       opacity: 0.5;
//       color: rgba(35, 81, 96, 1);
//       font-family: Rebelton;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 100%;

//     }
//     &.MuiMenuItem-root:hover{
//       background: none;
//       opacity: 100%;
//       p{
//         font-size: 16px;
//         opacity: 100%;
//       }
//     }
//   }
// `;

// export const HeaderAboutUs = styled.p`
// opacity: 0.5;
//     font-family: Rebelton;
//     font-size: 16px;
//     line-height: 22.4px;
//     color: rgba(35, 81, 96, 1);
//   @media screen and (min-width: 768px) {
//     opacity: 0.5;
//     font-family: Rebelton;
//     font-size: 16px;
//     line-height: 22.4px;
//     color: rgba(35, 81, 96, 1);
//   }

//   @media screen and (min-width: 1280px) {
//     opacity: 0.5;
//     font-family: Rebelton;
//     font-size: 16px;
//     line-height: 22.4px;
//     color: rgba(35, 81, 96, 1);
//   }
// `;

// export const HeaderNavWrap = styled.div`
//  display: flex;
//  flex-direction: column;
//     grid-column-gap: 39px;
//     margin-left: auto;
//     gap: 10px;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex-direction: row;
//     grid-column-gap: 39px;
//     margin-left: auto;
//     gap: 20px;
//   }

//   @media screen and (min-width: 1280px) {
//     display: flex;
//     grid-column-gap: 150px;
//     margin-left: auto;
//   }
// `;

// export const HeaderNav = styled.div`
//  display: flex;
//     grid-column-gap: 20px;
//     grid-row-gap: 20px;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     grid-column-gap: 20px;
//     grid-row-gap: 20px;
//   }

//   @media screen and (min-width: 1280px) {
//     display: flex;
//     grid-column-gap: 20px;
//     grid-row-gap: 20px;
//   }
// `;

// export const HeaderNavLink = styled(Link)`
// :hover {
//       fill: rgb(35 81 96 / 80%);
//     }
//   @media screen and (min-width: 768px) {
//     :hover {
//       fill: rgb(35 81 96 / 80%);
//     }
//   }

//   @media screen and (min-width: 1280px) {
//     :hover {
//       fill: rgb(35 81 96 / 80%);
//     }
//   }
// `;
