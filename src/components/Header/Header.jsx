import React from "react";
import {
  HeaderWrap,
  Container,
  HeaderWrapper,
  HeaderAccessoriesItem,
  HeaderAccessoriesItemText,
  HeaderAboutUs,
  HeaderNavWrap,
  HeaderNav,
  HeaderNavLink,
  HeaderCatalogButton,
} from "./Header.styled";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Logo from "../../assets/icons/logo-main.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/Favorite.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/Bag.svg";
import { Menu } from "@mui/material";

const headerAccessoriesList = [
  { name: "towels", link: "/products?category=towels" },
  { name: "bedding", link: "/products?category=bedding" },
  { name: "household linens", link: "/products?category=household-linens" },
];

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    const navLink = e.target.innerHTML;
    navigate(`/products?category=${navLink}`);
    setAnchorEl(null);
  };

  return (
    <HeaderWrap id="header">
      <Container className="container">
        <HeaderWrapper className="header-wrapper">
          <div style={{ marginRight: "auto" }}>
            <HeaderCatalogButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <p> catalog</p>
            </HeaderCatalogButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
                <Link to="/products">
                  <HeaderAccessoriesItem>
                    <HeaderAccessoriesItemText onClick={handleClose}>
                      <p>all products</p>
                    </HeaderAccessoriesItemText>
                  </HeaderAccessoriesItem>
                </Link>
                {headerAccessoriesList.map((item, index) => (
                  <Link to={item.link} key={index}>
                    <HeaderAccessoriesItem>
                      <HeaderAccessoriesItemText onClick={handleClose}>
                        <p>{item.name}</p>
                      </HeaderAccessoriesItemText>
                    </HeaderAccessoriesItem>
                  </Link>
                ))}
            </Menu>
          </div>

          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>

          <HeaderNavWrap className="header-nav-wrap">
            <NavLink
              to="/about"
              style={{
                textDecoration: pathname === "/about" ? "underline" : "none",
              }}
            >
              <HeaderAboutUs>about us</HeaderAboutUs>
            </NavLink>
            <HeaderNav className="header-nav">
              <HeaderNavLink>
                <SearchIcon />
              </HeaderNavLink>
              <HeaderNavLink to="/favorites">
                <FavoriteIcon />
              </HeaderNavLink>
              <HeaderNavLink to="/basket">
                <BagIcon />
              </HeaderNavLink>
              <HeaderNavLink to="/account">
                <UserIcon />
              </HeaderNavLink>
            </HeaderNav>
          </HeaderNavWrap>
        </HeaderWrapper>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
