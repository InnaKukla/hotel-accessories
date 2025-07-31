import React from "react";
import {
  ProductNavLinkItem,
  ProductNavLinkItemName,
  ProductNavLinksBackButton,
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
            <img src={ArrowRight} alt="Arrow Right" width={5} />
          </ProductNavLinkItem>
        </Link>

        {page === "favorites" && (
          <>
            <Link to={`/products`}>
              <ProductNavLinkItem>
                <p>Catalog</p>
                <img src={ArrowRight} alt="Arrow Right" width={5} />
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
            <Link to={`/account`}>
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
                <img src={ArrowRight} alt="Arrow Right" width={5} />
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
          <>
            <Link to={`/products`}>
              <ProductNavLinkItem>
                <p>Catalog</p>
                <img src={ArrowRight} alt="Arrow Right" width={5} />
              </ProductNavLinkItem>
            </Link>
            <ProductNavLinkItem page={page} >
              <p>Basket</p>
            </ProductNavLinkItem>
          </>
        )}

        {page === "basket" && item._id && (
          <>
            <Link to={`/products`}>
              <ProductNavLinkItem>
                <p>Catalog</p>
                <img src={ArrowRight} alt="Arrow Right" width={5} />
              </ProductNavLinkItem>
            </Link>
            <Link to={`/products/${item._id}`}>
              <ProductNavLinkItemName page={page}>
                <p>{item.name}</p>
                <img src={ArrowRight} alt="Arrow Right" width={5} />
              </ProductNavLinkItemName>
            </Link>
            <ProductNavLinkItem page={page}>
              <p>Basket</p>
            </ProductNavLinkItem>
          </>
        )}
      </ProductNavLinksList>

      <ProductNavLinksBackButton to={-1}>
        <img src={ButtonBack} alt="button back" />
      </ProductNavLinksBackButton>
    </ProductNavLinksWrapper>
  );
};

export default ProductNavLinks;
