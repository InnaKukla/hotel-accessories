import styled from "styled-components";

export const HeroSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 416px;
    padding-bottom: 416px;
    background-position: 50% 50%;
    background-size: cover;
    font-family: Rebelton;
    font-size: 24px;
    background-image: url("/img/hero-bg.jpg");
  }
`;

export const HeroWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

export const HeroMainText = styled.h1`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Angst;
    font-size: 96px;
    line-height: 105.6px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
`;

export const HeroText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    opacity: 1;
    font-family: Rebelton;
    font-size: 24px;
    line-height: 33.6px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
`;
