import styled from "styled-components";

export const CatalogHomeSection = styled.section`
padding-top: 150px;
background-color: rgba(249, 249, 249, 1);
min-width: 100vw;
  @media screen and (max-width: 1024px) {
   
  }
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (max-width: 480px) {
    padding-top: 50px;
  }
`;

export const ContainerCatalogHome = styled.div`
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

export const CatalogHomeWrapper = styled.div`
/* width: 740px; */
  @media screen and (min-width: 768px) {
    /* width: 740px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 1440px; */
  }
`;

export const CatalogHomeHeader = styled.div`
display: flex;
    justify-content: space-between;
    align-items: flex-end;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
   
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const CatalogHomeMainText = styled.h2`
font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-top: 0px;
    margin-bottom: 0px;
    /* font-family: Angst;
    font-size: 96px;
    line-height: 105.6px;
    font-weight: 400; */
    color: rgba(35, 81, 96, 1);

`;


export const CatalogHomeLine = styled.div`
height: 1px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 0px;
    opacity: 0.2;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(0, 0, 0, 1);
`;

export const CatalogHomeList = styled.div`
display: grid;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  @media screen and (max-width: 1024px) {
    display: grid;
    align-items: center;
    grid-auto-columns: 2fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    grid-auto-columns: 2fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const CatalogHomeListTextWrap = styled.div`
 display: flex;
    height: 375px;

    justify-content: center;
    align-items: center;

    /* font-family: Rebelton;
    font-size: 48px;
    line-height: 67.2px;
    font-weight: 400; */
    color: rgba(0, 0, 0, 1);

    border: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    display: flex;
    height: 300px;

    justify-content: center;
    align-items: center;

    /* font-family: Rebelton;
    font-size: 48px;
    line-height: 67.2px;
    font-weight: 400; */
    color: rgba(0, 0, 0, 1);

    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    height: 150px;
    min-width: 150px;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 1);

    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogHomeListText = styled.p`
 /* margin-right: 112px;
    margin-left: 112px; */
    opacity: 1;
    text-transform: uppercase;
    font-family: Rebelton;
    font-size: 48px;
    line-height: 67.2px;
    font-weight: 400;
    color: rgba(35, 81, 96, 1);
  @media screen and (max-width: 1024px) {
    /* margin-right: 80px;
    margin-left: 80px; */
    opacity: 1;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 40px;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const CatalogHomeListItem = styled.div`
display: flex;
    height: 375px;
    justify-content: center;
    align-items: center;
    background-image: url("./img/towel.jpg");
    background-position: 50% 50%;
    background-size: cover;
    font-family: Rebelton;
    text-align: center;
  @media screen and (max-width: 1024px) {
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    height: 150px;
    min-width: 150px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogHomeListTextItem = styled.p`
display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rebelton Extended;
    font-size: 48px;
    line-height: 67.2px;
    text-align: center;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
    word-break: break-word;
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 40px;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const CatalogHomeHouseholdLinens = styled.div`
display: flex;
    height: 375px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    justify-content: center;
    align-items: center;
    background-image: url("./img/household.jpg");
    background-position: 50% 50%;
    background-size: cover;
    font-family: Rebelton;
    text-align: center;
  @media screen and (max-width: 1024px) {
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    height: 150px;
    min-width: 150px;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const CatalogHomeItemBed = styled.div`
display: flex;
    height: 375px;
    justify-content: center;
    align-items: center;
    background-image: url("./img/badding.jpg");
    background-position: 50% 50%;
    background-size: cover;
  @media screen and (max-width: 1024px) {
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    height: 150px;
    min-width: 150px;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const CatalogHomeAll = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
