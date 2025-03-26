import { Pagination } from "@mui/material";
import { Link } from "react-router";
import styled from "styled-components";

export const CatalogSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    padding-top: 48px;
    background-color: rgba(249, 249, 249, 1);
  }
`;

export const ContainerCatalog = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 1440px;
    padding-right: 20px;
    padding-left: 20px;
    margin: auto;
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const CatalogMainText = styled.h2`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Angst;
    font-size: 96px;
    line-height: 105.6px;
    font-weight: 400;
    color: rgba(35, 81, 96, 1);
  }
`;

export const CatalogFilterWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`;

export const CatalogFilterText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;
    color: rgba(70, 70, 70, 1);
  }
`;

export const CatalogLine = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    height: 1px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 0px;
    opacity: 0.2;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(0, 0, 0, 1);
  }
`;

export const CatalogList = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

export const CatalogListTextWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    height: 463px;
    width: 463px;

    justify-content: center;
    align-items: center;

    /* font-family: Rebelton;
    font-size: 48px;
    line-height: 67.2px;
    font-weight: 400; */
    color: rgba(0, 0, 0, 1);

    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const CatalogListText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-right: 112px;
    margin-left: 112px;
    opacity: 1;
    text-transform: uppercase;
    font-family: Rebelton;
    font-size: 48px;
    line-height: 67.2px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }
`;

export const CatalogListItem = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
  }
`;

export const CatalogListTextItem = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rebelton Extended;
    font-size: 48px;
    line-height: 67.2px;
    text-align: center;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
  }
`;

export const CatalogHouseholdLinens = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
  }
`;

export const CatalogItemBed = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    width: 463px;
    height: 463px;
    justify-content: center;
    align-items: center;
    background-image: url("/img/badding.jpg");
    background-position: 50% 50%;
    background-size: cover;
  }
`;

export const CatalogAll = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const CatalogFilterList = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const CatalogFilterButton = styled.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 140px;
    background: none;
    border: none;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);

    &:last-child {
      width: 215px;
    }
  }
`;

export const CatalogProductsList = styled.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    /* display: grid; */
    /* grid-template-columns: repeat(4, 1fr); */
    gap: 10px;
  }
`;
export const CatalogProductsItem = styled.li`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    max-width: 340px;
    height: 100%;
    flex-grow: 1;
    position: relative;
  }
`;

export const CatalogProductsItemWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const CatalogProductsItemTextWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const CatalogProductsItemTextCode = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    opacity: 50%;
    color: rgba(35, 81, 96, 1);
  }
`;

export const CatalogProductsItemTextName = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
  /* max-height: 3em; Обмежує висоту (підлаштуй під розмір шрифту) */

  }
`;
export const CatalogProductsItemTextPrice = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0%;
    text-align: left;
    color: rgba(35, 81, 96, 1);
  }
`;

export const CatalogHomeItemLink = styled(Link)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    text-decoration: none;
    display: block;
  }
`;

export const CatalogProductsBuyWrap = styled.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    background-color: rgba(35, 81, 96, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    border: none;
    height: 100%;
  }
`;

export const CatalogProductsPagination = styled(Pagination).attrs(({ isFirstPage, isLastPage }) => ({
  $isFirstPage: isFirstPage,
  $isLastPage: isLastPage,
}))`

@media screen and (min-width: 768px) {
  }

  
  @media screen and (min-width: 1280px) {
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
`;
