import styled from "styled-components";

export const FooterSection = styled.section`
  padding-top: 45px;
  padding-bottom: 20px;
  background-color: rgba(35, 81, 96, 1);
  @media screen and (max-width: 1024px) {
    padding-top: 45px;
    padding-bottom: 20px;
    background-color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 768px) {
    padding-top: 45px;
    padding-bottom: 20px;
    background-color: rgba(35, 81, 96, 1);
    min-width: 100vw;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterWrapper = styled.div`
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterWrapperText = styled.div`
  display: flex;
  justify-content: center;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  margin-top: 89px;
  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    grid-row-gap: 20px;
    align-items: flex-end;
  }
  @media screen and (max-width: 480px) {
    margin-top: 60px;
    grid-row-gap: 15px;
  }
`;

export const FooterText = styled.p`
  font-family: Helvetica;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterPrivacy = styled.p`
  font-family: Helvetica;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: rgba(255, 255, 255, 1);
  text-decoration: underline;
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterEmail = styled.p`
  font-family: Helvetica;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;
