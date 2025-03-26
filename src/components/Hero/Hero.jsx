import React from "react";
import { Container } from "../Header/Header.styled";
import {
  HeroSection,
  HeroWrapper,
  HeroMainText,
  HeroText,
} from "./Hero.styled";
import { ReactComponent as LogoWhite } from "../../assets/icons/logo-white.svg";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroWrapper >
          <LogoWhite />
          <HeroMainText >
            Welcome to Upscale Linen
          </HeroMainText>
          <HeroText >
            Everyday Comfort, Endless Elegance
          </HeroText>
        </HeroWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
