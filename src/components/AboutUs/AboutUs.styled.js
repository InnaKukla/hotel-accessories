import { Link } from "react-router";
import styled from "styled-components";

export const AboutUsSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    padding-top: 70px;
    background-color: rgba(249, 249, 249, 1);
  }
`;

export const AboutUsWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    position: relative;
  }
`;

export const AboutUsLinksWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    text-align: center;
    position: fixed;
    max-width: 280px;
    top: ${(props) =>
      props.position === "before-our-solution"
        ? "170px"
        : props.position === "hospitality"
        ? "-70px"
        : "10px"};
    transition: top 0.3s ease-in-out;
  }
`;

export const AboutUsLinkTextWrapper = styled.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const AboutUsLink = styled.a`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const AboutUsLinkText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: rgba(70, 70, 70, 1);
  }
`;

export const AboutUsLinksButtonBack = styled(Link)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin: auto;
    background: none;
    border: none;
  }
`;

export const AboutUsSectionsWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const AboutUsOneSectionWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    &:first-child {
      margin-top: 0;
    }
  }
`;

export const AboutUsSectionMainText = styled.h2`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Angst;
    font-weight: 50;
    font-size: 96px;
    line-height: 105.6px;
    letter-spacing: 0%;
    text-align: center;
    color: rgba(0, 0, 0, 1);
  }
`;

export const AboutUsSectionText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0%;
    text-align: center;
    color: rgba(70, 70, 70, 1);
    max-width: 935px;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;
