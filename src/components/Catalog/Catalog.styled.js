import { Pagination } from "@mui/material";
import { Link } from "react-router";
import styled from "styled-components";

export const CatalogSection = styled.section`
  display: flex;
  padding-top: 48px;
  background-color: rgba(249, 249, 249, 1);
  padding-top: 100px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    padding-top: 35px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 30px;
  }
`;

export const ContainerCatalog = styled.div`
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
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const CatalogWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* margin-bottom: 60px; */
  }
`;

export const CatalogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: flex-start; */
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogMainText = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Angst;
  font-size: 96px;
  line-height: 105.6px;
  font-weight: 400;
  color: rgba(35, 81, 96, 1);
  @media screen and (max-width: 1024px) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Angst;
    font-size: 96px;
    line-height: 105.6px;
    font-weight: 400;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Angst;
    font-size: 65px;
    line-height: 105.6px;
    font-weight: 400;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogFilterText = styled.p`
  font-family: Helvetica;
  font-size: 20px;
  line-height: 30px;
  text-transform: capitalize;
  color: rgba(70, 70, 70, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogLine = styled.div`
  height: 1px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-bottom: 0px;
  opacity: 0.2;
  color: rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogList = styled.div`
  display: flex;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogListTextWrap = styled.div`
  display: flex;
  height: 463px;
  width: 463px;

  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 1);

  border: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogListText = styled.p`
  margin-right: 112px;
  margin-left: 112px;
  opacity: 1;
  text-transform: uppercase;
  font-family: Rebelton;
  font-size: 48px;
  line-height: 67.2px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogListItem = styled.div`
  display: flex;
  width: 463px;
  height: 463px;
  justify-content: center;
  align-items: center;
  background-image: url("/img/towel.jpg");
  background-position: 50% 50%;
  background-size: cover;
  font-family: Rebelton;
  text-align: center;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogListTextItem = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Rebelton Extended;
  font-size: 48px;
  line-height: 67.2px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogHouseholdLinens = styled.div`
  display: flex;
  width: 463px;
  height: 463px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  justify-content: center;
  align-items: center;
  background-image: url("/img/household.jpg");
  background-position: 50% 50%;
  background-size: cover;
  font-family: Rebelton;
  text-align: center;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogItemBed = styled.div`
  display: flex;
  width: 463px;
  height: 463px;
  justify-content: center;
  align-items: center;
  background-image: url("/img/badding.jpg");
  background-position: 50% 50%;
  background-size: cover;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogAll = styled.div`
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogFilterList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-left: auto;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: end;
    flex-direction: row;
    gap: 10px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogFilterButton = styled.button`
  width: 140px;
  background: none;
  border: none;
  font-family: Rebelton;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  letter-spacing: 0%;
  color: rgba(35, 81, 96, 1);
  text-align: right;

  &:last-child {
    width: 215px;
  }
  @media screen and (max-width: 1024px) {
    width: 140px;
    background: none;
    border: none;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    text-align: right;

    &:last-child {
      width: 215px;
    }
  }
  @media screen and (max-width: 768px) {
    background: none;
    border: none;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    text-align: right;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogProductsList = styled.ul`
  /* margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px; */

  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    /* display: flex;
    flex-wrap: wrap; */
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    /* justify-content: center; */
  }
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    /* margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: flex-start; */
  }
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    /* margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: flex-start; */
  }
`;
export const CatalogProductsItem = styled.li`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  position: relative;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    /* max-width: 500px;
    min-width: 480px; */
  }
  @media screen and (max-width: 600px) {
    flex-direction: row;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
    /* flex-grow: 1; */
    /* min-width: 480px; */
    flex-direction: column;
  }
`;

export const CatalogProductsItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  height: 300px;
  @media screen and (max-width: 1024px) {
    /* height: 300px; */
  }
  @media screen and (max-width: 768px) {
    /* height: 300px; */
  }
  @media screen and (max-width: 600px) {
    height: 250px;
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    height: 300px;
    width: 100%;
  }
`;

export const CatalogProductsItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  background-color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    flex-direction: row;
  }
`;

export const CatalogProductsItemTextWrap = styled.div`
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    padding-left: 5px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogProductsItemTextCode = styled.p`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  opacity: 50%;
  color: rgba(35, 81, 96, 1);
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
    opacity: 50%;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 600px) {
    margin: 50px 0 20px 0;
  }
  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const CatalogProductsItemTextName = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: rgba(35, 81, 96, 1);
  flex-grow: 1;

  display: -webkit-box;
  -webkit-line-clamp: 1; /* Кількість рядків */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: rgba(35, 81, 96, 1);
    flex-grow: 1;

    display: -webkit-box;
    -webkit-line-clamp: 1; /* Кількість рядків */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: rgba(35, 81, 96, 1);
    flex-grow: 1;

    display: -webkit-box;
    -webkit-line-clamp: 1; /* Кількість рядків */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const CatalogProductsItemTextPrice = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0%;
  text-align: left;
  color: rgba(35, 81, 96, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
    /* margin-bottom: 20px; */
  }
  @media screen and (max-width: 480px) {
    /* margin-bottom: 0; */
  }
`;

export const CatalogHomeItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CatalogProductsBuyWrap = styled.button`
  background-color: rgba(35, 81, 96, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  border: none;
  height: 100%;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
    padding: 10px 0;
    margin: auto;
  }
  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const CatalogPaginationWrap = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 150px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 100px;
  }
`;

export const CatalogProductsPagination = styled(Pagination).attrs(
  ({ isFirstPage, isLastPage }) => ({
    $isFirstPage: isFirstPage,
    $isLastPage: isLastPage,
  })
)`
  & .MuiPaginationItem-root {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 33.6px;
    color: rgba(35, 81, 96, 1);
    opacity: 0.2;
    background: none;
  }

  & .MuiPaginationItem-icon {
    width: 1em;
    height: 1em;
  }
  & .MuiPaginationItem-root.Mui-selected {
    opacity: 100%;
    background: none;
  }
  & .MuiPaginationItem-previousNext {
    font-size: 24px;
    height: 4px;
    color: rgba(35, 81, 96, 1);
    opacity: 1;
  }
  @media screen and (max-width: 1024px) {
    & .MuiPaginationItem-root {
      font-family: Rebelton;
      font-weight: 400;
      font-size: 24px;
      line-height: 33.6px;
      color: rgba(35, 81, 96, 1);
      opacity: 0.2;
      background: none;
    }

    & .MuiPaginationItem-icon {
      width: 1em;
      height: 1em;
    }
    & .MuiPaginationItem-root.Mui-selected {
      opacity: 100%;
      background: none;
    }
    & .MuiPaginationItem-previousNext {
      font-size: 24px;
      height: 4px;
      color: rgba(35, 81, 96, 1);
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    & .MuiPaginationItem-root {
      font-family: Rebelton;
      font-weight: 400;
      font-size: 24px;
      line-height: 33.6px;
      color: rgba(35, 81, 96, 1);
      opacity: 0.2;
      background: none;
    }

    & .MuiPaginationItem-icon {
      width: 1em;
      height: 1em;
    }
    & .MuiPaginationItem-root.Mui-selected {
      opacity: 100%;
      background: none;
    }
    & .MuiPaginationItem-previousNext {
      font-size: 24px;
      height: 4px;
      color: rgba(35, 81, 96, 1);
      opacity: 1;
    }
  }
  @media screen and (max-width: 480px) {
  }
`;
