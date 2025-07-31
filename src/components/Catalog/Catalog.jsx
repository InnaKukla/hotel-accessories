import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";

import productsOperations from "../../redux/products/products-operations";
import {
  selectCurrentPage,
  selectProducts,
  selectProductsLoading,
  selectProductsTotalPages,
} from "../../redux/products/products-selectors";
import {
  CatalogSection,
  CatalogWrapper,
  CatalogHeader,
  CatalogMainText,
  CatalogLine,
  CatalogAll,
  CatalogFilterList,
  CatalogFilterButton,
  CatalogProductsList,
  CatalogProductsItem,
  CatalogProductsItemWrap,
  CatalogProductsItemTextWrap,
  CatalogProductsItemTextCode,
  CatalogProductsItemTextName,
  CatalogProductsItemTextPrice,
  CatalogProductsBuyWrap,
  CatalogProductsPagination,
  ContainerCatalog,
  CatalogProductsItemImg,
  CatalogPaginationWrap,
} from "./Catalog.styled";

import Trolley from "../../assets/icons/trolley.svg";
import { Link } from "react-router";
import Loader from "../../shared/Loader/Loader";

import cartOperations from "../../redux/cart/cart-operations";

const Catalog = () => {
  const filterButtons = [
    { id: "towels", label: "towels" },
    { id: "bedding", label: "bedding" },
    { id: "household-linens", label: "household linens" },
  ];
  const dispatch = useDispatch();
  const loading = useSelector(selectProductsLoading);
  const totalPages = useSelector(selectProductsTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const products = useSelector(selectProducts);
  const [activeLink, setActiveLink] = useState("");
  const [page, setPage] = useState(currentPage || 1);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetch = async () => {
      if (category) {
        setActiveLink(category);
        const result = await dispatch(
          productsOperations.fetchProductsByCategory(category)
        );
        const newPage = result.payload?.currentPage;

        setPage(newPage);
      } else {
        handleAllProducts();
        setActiveLink("");
      }
    };
    fetch();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, activeLink, category]);

  const handleAllProducts = async () => {
    searchParams.delete("category");
    setActiveLink("");
    await dispatch(
      productsOperations.fetchAllProducts({
        page,
      })
    );
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleFilter = async (category) => {
    if (filterButtons.some((button) => button.id === category)) {
      setActiveLink(category);
      searchParams.set("category", category);
    }
    await dispatch(productsOperations.fetchProductsByCategory(category));
  };

  const handleAddToCart = async (id) => {
    await dispatch(
      cartOperations.addCartProduct({ productId: id, quantity: 1 })
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CatalogSection>
          <ContainerCatalog>
            <CatalogWrapper>
              <CatalogHeader>
                <CatalogMainText
                  onClick={handleAllProducts}
                  style={{ cursor: "pointer" }}
                >
                  catalog
                </CatalogMainText>
                <CatalogFilterList>
                  {filterButtons.map((button) => (
                    <CatalogFilterButton
                      key={button.id}
                      onClick={() => handleFilter(button.id)}
                      style={{
                        textDecoration:
                          activeLink === button.id ? "underline" : "none",
                      }}
                    >
                      {button.label}
                    </CatalogFilterButton>
                  ))}
                </CatalogFilterList>
              </CatalogHeader>
              <CatalogLine />

              {/* <CatalogAll> */}
              <CatalogProductsList>
                {products && products.length > 0 ? (
                  products.map((item) => (
                    <CatalogProductsItem key={item._id}>
                      <Link
                        to={`/products/${item._id}`}
                        style={{ display: "flex" }}
                        state={{ id: item._id }}
                      >
                        <CatalogProductsItemImg
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                        />
                      </Link>
                      <CatalogProductsItemWrap>
                        <Link
                          to={`/products/${item._id}`}
                          style={{ marginLeft: "5px", marginTop: "5px" }}
                        >
                          <CatalogProductsItemTextWrap>
                            <CatalogProductsItemTextCode>
                              {item.category}
                            </CatalogProductsItemTextCode>
                            <CatalogProductsItemTextName>
                              {item.name}
                            </CatalogProductsItemTextName>
                            <CatalogProductsItemTextPrice>
                              {item.price}
                            </CatalogProductsItemTextPrice>
                          </CatalogProductsItemTextWrap>
                        </Link>
                        <Link to="/basket" state={{ id: item._id }} style={{backgroundColor: "rgb(35, 81, 96)"}}>
                          <CatalogProductsBuyWrap
                            onClick={() => handleAddToCart(item._id)}
                          >
                            <img src={Trolley} alt="Trolley" loading="lazy" />
                          </CatalogProductsBuyWrap>
                        </Link>
                      </CatalogProductsItemWrap>
                    </CatalogProductsItem>
                  ))
                ) : (
                  <div style={{ width: "1440px" }}>
                    <p>No products found for this category</p>
                  </div>
                )}
              </CatalogProductsList>
              {/* </CatalogAll> */}
            </CatalogWrapper>
            {products && products.length > 0 && (
              <CatalogPaginationWrap>
                <CatalogProductsPagination
                  sx={{ margin: "auto" }}
                  count={totalPages || 0}
                  page={page}
                  onChange={handleChangePage}
                />
              </CatalogPaginationWrap>
            )}
          </ContainerCatalog>
        </CatalogSection>
      )}
    </>
  );
};

export default Catalog;
