import styled from "styled-components";

export const FavoritesSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    /* padding-top: 250px; */
    background-color: rgba(249, 249, 249, 1);
  }
`;

export const FavoritesTitle = styled.h2`
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

export const FavoritesWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FavoritesList = styled.ul`
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

export const FavoritesItem = styled.li`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const CatalogFilterWrapper = styled.div`
//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1280px) {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     grid-column-gap: 5px;
//     grid-row-gap: 5px;
//   }
// `;

// export const CatalogFilterText = styled.p`
//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1280px) {
//     font-family: Helvetica;
//     font-size: 20px;
//     line-height: 30px;
//     text-transform: capitalize;
//     color: rgba(70, 70, 70, 1);
//   }
// `;

export const CatalogHomeLine = styled.div`
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

export const CatalogHomeList = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

export const CatalogHomeListTextWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
  }
`;

export const CatalogHomeListText = styled.p`
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
    color: rgba(35, 81, 96, 1);
    /* color: rgba(0, 0, 0, 1); */
  }
`;

export const CatalogHomeListItem = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    height: 375px;
    justify-content: center;
    align-items: center;
    background-image: url("/img/towel.jpg");
    background-position: 50% 50%;
    background-size: cover;
    font-family: Rebelton;
    text-align: center;
  }
`;

export const CatalogHomeListTextItem = styled.p`
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

export const CatalogHomeHouseholdLinens = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    height: 375px;
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

export const CatalogHomeItemBed = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    height: 375px;
    justify-content: center;
    align-items: center;
    background-image: url("/img/badding.jpg");
    background-position: 50% 50%;
    background-size: cover;
  }
`;

export const CatalogHomeAll = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
