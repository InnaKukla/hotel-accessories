import React from "react";
import { Link } from "react-router";
import {
  CatalogHomeHeader,
  CatalogHomeHouseholdLinens,
  CatalogHomeItemBed,
  CatalogHomeLine,
  CatalogHomeList,
  CatalogHomeListItem,
  CatalogHomeListText,
  CatalogHomeListTextItem,
  CatalogHomeListTextWrap,
  CatalogHomeMainText,
  CatalogHomeSection,
  CatalogHomeWrapper,
  ContainerCatalogHome,
} from "./CatalogHome.styled";
import { CatalogHomeItemLink } from "../Catalog/Catalog.styled";

const CatalogHome = () => {
  

  return (
    <CatalogHomeSection>
      <ContainerCatalogHome>
        <CatalogHomeWrapper className="catalog-wrapper">
          <CatalogHomeHeader className="catalog-header">
            <CatalogHomeMainText className="catalog-main-text">
              catalog
            </CatalogHomeMainText>

          </CatalogHomeHeader>
          <CatalogHomeLine />
        
          <CatalogHomeList className="catalogs-list">
            <Link to={"/products"}>
              <CatalogHomeListTextWrap className="catalogs-text-wrap">
                <CatalogHomeListText className="catalogs-text">
                  see all
                </CatalogHomeListText>
              </CatalogHomeListTextWrap>
            </Link>

            <CatalogHomeItemLink
              to="/products?category=towels">
              <CatalogHomeListItem className="catalogs-item">
                <CatalogHomeListTextItem className="catalogs-item-text">
                  towels
                </CatalogHomeListTextItem>
              </CatalogHomeListItem>
            </CatalogHomeItemLink>

            <CatalogHomeItemLink
              to={"/products?category=bedding"}>
              <CatalogHomeItemBed className="catalog-item-bed">
                <CatalogHomeListTextItem className="catalogs-item-text">
                  bedding
                </CatalogHomeListTextItem>
              </CatalogHomeItemBed>
            </CatalogHomeItemLink>

            <CatalogHomeItemLink
              to={"/products?category=household-linens"}>
              <CatalogHomeHouseholdLinens className="household-linens">
                <CatalogHomeListTextItem className="catalogs-item-text">
                  household linens
                </CatalogHomeListTextItem>
              </CatalogHomeHouseholdLinens>
            </CatalogHomeItemLink>
          </CatalogHomeList>
          {/* )} */}
        </CatalogHomeWrapper>
      </ContainerCatalogHome>
    </CatalogHomeSection>
  );
};

export default CatalogHome;
