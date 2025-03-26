import styled from "styled-components";

export const FooterSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 45px;
    padding-bottom: 20px;
    background-color: rgba(35, 81, 96, 1);
  }
`;

export const FooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    grid-column-gap: 35px;
    grid-row-gap: 35px;
  }
`;

export const FooterWrapperText = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    grid-column-gap: 60px;
    grid-row-gap: 60px;
  }
`;

export const FooterText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
  }
`;

export const FooterPrivacy = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
  }
`;

export const FooterEmail = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
  }
`;
