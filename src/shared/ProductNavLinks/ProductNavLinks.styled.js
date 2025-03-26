import styled from "styled-components";

export const ProductNavLinksWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ProductNavLinksList = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 15px;
  }
`;

export const ProductNavLinkItem = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
`;

export const ProductNavLinkItemName = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
`;
