import styled from "styled-components";

export const ProductNavLinksWrapper = styled.div`
 padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ProductNavLinksList = styled.div`
 display: flex;
 gap: 15px;
    @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 480px) {
  }

`;

export const ProductNavLinkItem = styled.div`
  display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === 'basket' ? 1 : 0.5)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
    @media screen and (max-width: 1024px) {
      display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === 'basket' ? 1 : 0.5)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === 'basket' ? 1 : 0.5)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ProductNavLinkItemName = styled.div`
  display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === 'basket' ? 0.5 : 1)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
    @media screen and (max-width: 1024px) {
      display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === 'basket' ? 0.5 : 1)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === 'basket' ? 0.5 : 1)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
  @media screen and (max-width: 480px) {
  }
`;
