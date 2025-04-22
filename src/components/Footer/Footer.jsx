import React from "react";
import { Container } from "../Header/Header.styled";
import { Link, NavLink } from "react-router";
import {
  FooterSection,
  FooterWrapper,
  FooterWrapperText,
  FooterText,
  FooterPrivacy,
  FooterEmail
} from "./Footer.styled";

import LogoFooter from "../../assets/icons/footer-logo.svg";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper className="footer-wrapper">
       <Link to={"/#header"} style={{display: "flex", justifyContent: "center"}}>
       <img src={LogoFooter} alt="logo footer" loading="lazy"/></Link>
          <FooterWrapperText className="footer-wrapper-text">
            <FooterText className="footer-text">
              Company Upscale Linen 2024
            </FooterText>
            <NavLink>
              <FooterPrivacy className="footer-privacy">Privacy</FooterPrivacy>
            </NavLink>
            <NavLink>
              <FooterEmail className="footer-email">UpscaleLinen@gmail.com</FooterEmail>
            </NavLink>
          </FooterWrapperText>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
