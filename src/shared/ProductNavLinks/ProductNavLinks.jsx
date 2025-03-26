import React from "react";
import {
  ProductNavLinkItem,
  ProductNavLinkItemName,
  ProductNavLinksList,
  ProductNavLinksWrapper,
} from "./ProductNavLinks.styled";
import { Link } from "react-router";
import ButtonBack from "../../assets/icons/back-icon.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const ProductNavLinks = ({ item, page }) => {

  return (
    <ProductNavLinksWrapper>
      <ProductNavLinksList>
        <Link to={"/"}>
          <ProductNavLinkItem>
            <p>Home</p>
            <img src={ArrowRight} alt="Arrow Right" />
          </ProductNavLinkItem>
        </Link>

        {page === "favorites" && (
          <>
           <Link to={`/products`}>
              <ProductNavLinkItem>
                <p>Catalog</p>
                <img src={ArrowRight} alt="Arrow Right" />
              </ProductNavLinkItem>
            </Link>
            {/* <Link to={`/favorites`}> */}
              <ProductNavLinkItem>
                <p>Favorites</p>
                {/* <img src={ArrowRight} alt="Arrow Right" /> */}
              </ProductNavLinkItem>
            {/* </Link> */}
          </>
        )}

        {page === "registration" && (
          <>
            <Link to={`/registration`}>
              <ProductNavLinkItem>
                <p>Personal account</p>
                {/* <img src={ArrowRight} alt="Arrow Right" /> */}
              </ProductNavLinkItem>
            </Link>
          </>
        )}

        {page === "product" && (
          <>
            <Link to={`/products`}>
              <ProductNavLinkItem>
                <p>Catalog</p>
                <img src={ArrowRight} alt="Arrow Right" />
              </ProductNavLinkItem>
            </Link>
            <Link to={`/products/${item._id}`}>
              <ProductNavLinkItemName page={page}>
                <p>{item.name}</p>
              </ProductNavLinkItemName>
            </Link>
          </>
        )}

        {page === "basket" && (
          <>
            <Link to={`/products`}>
              <ProductNavLinkItem>
                <p>Catalog</p>
                <img src={ArrowRight} alt="Arrow Right" />
              </ProductNavLinkItem>
            </Link>
            <Link to={`/products/${item._id}`}>
              <ProductNavLinkItemName page={page}>
                <p>{item.name}</p>
              </ProductNavLinkItemName>
            </Link>
          </>
        )}

        {page === "basket" && !item._id && (
          <ProductNavLinkItem page={page} style={{ marginLeft: "-15px" }}>
            <p>Basket</p>
          </ProductNavLinkItem>
        )}
        {page === "basket" && item._id && (
          <ProductNavLinkItem page={page}>
            <img src={ArrowRight} alt="Arrow Right" />
            <p>Basket</p>
          </ProductNavLinkItem>
        )}
      </ProductNavLinksList>

      <Link to={-1}>
        <img src={ButtonBack} alt="button back" />
      </Link>
    </ProductNavLinksWrapper>
  );
};

export default ProductNavLinks;
