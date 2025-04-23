import styled from "styled-components";

export const HeroSection = styled.section`
padding-top: 416px;
    padding-bottom: 416px;
    background-position: 50% 50%;
    background-size: cover;
    font-family: Rebelton;
    font-size: 24px;
    background-image: url("./img/hero-bg.webp");
  @media screen and (max-width: 1024px) {
    padding-top: 170px;
    padding-bottom: 170px;
    background-position: 50% 50%;
    background-size: cover;
    font-family: Rebelton;
    font-size: 20px;
    background-image: url("./img/hero-bg.webp");
  }
  @media screen and (max-width: 768px) {
    padding-top: 170px;
  padding-bottom: 170px;
  background-position: 50% 50%;
  background-size: cover;
  font-family: Rebelton;
  font-size: 20px;
  background-image: url("./img/hero-bg.webp");
  }
  @media screen and (max-width: 480px) {
    /* padding-top: 170px;
  padding-bottom: 170px;
  background-position: 50% 50%;
  background-size: cover;
  font-family: Rebelton;
  font-size: 20px;
  background-image: url("/img/hero-bg.jpg"); */
  }
`;

export const HeroWrapper = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const HeroMainText = styled.h1`
font-family: Angst;
    font-size: 96px;
    line-height: 105.6px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  @media screen and (max-width: 1024px) {
    font-family: Angst;
    font-size: 96px;
    line-height: 90px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-family: Angst;
  font-size: 60px;
    line-height: 70px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const HeroText = styled.p`
 opacity: 1;
    font-family: Rebelton;
    font-size: 24px;
    line-height: 33.6px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
    opacity: 1;
    font-family: Rebelton;
    font-size: 24px;
    line-height: 33.6px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 768px) {
    opacity: 1;
  font-family: Rebelton;
  font-size: 18px;
  line-height: 33.6px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  }
  @media screen and (max-width: 480px) {
  }
`;
