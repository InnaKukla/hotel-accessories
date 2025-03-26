import styled from "styled-components";

export const ProductSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ProductWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

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
    opacity: 50%;
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
    opacity: 100%;
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

export const ProductInformationWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const ProductInformImg = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-right: 36px;
  }
`;

export const ProductInformCodeWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 60px;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-transform: capitalize;
      color: rgba(35, 81, 96, 1);
    }
  }
`;

export const ProductInformName = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 64px;
    line-height: 70.4px;
    color: rgba(35, 81, 96, 1);
  }
`;

export const ProductInformColor = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 65px;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
    span {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(35, 81, 96, 0.7);
    }
  }
`;

export const ProductInformSize = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 84px;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
    span {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(35, 81, 96, 0.7);
    }
  }
`;

export const ProductInformSet = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 70px;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
  }
`;

export const ProductInformPrice = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {

    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: rgba(35, 81, 96, 0.8);
    margin-top: 122px;
  }
`;

export const ProductButtonWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    background: none;
    border: none;
    width: 100%;
    padding: 0;
    align-items: flex-end;
    gap: 10px;
    margin-top: 14px;
  }
`;

export const ProductButton = styled.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    background: none;
    border: none;
    width: 100%;
    padding: 0;
    align-items: center;
    gap: 10px;
    margin-top: 14px;
  }
`;
export const ProductButtonAdd = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    width: 100%;
    padding: 13px 0;
    justify-content: center;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
  }
`;
export const ProductButtonTrolley = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    border: 1px solid rgba(35, 81, 96, 1);
    padding: 17.5px;
    display: flex;
    svg {
      fill: ${(props) =>
        props.isactive ? " rgba(35, 81, 96, 1)" : "rgba(255, 255, 255, 1) "};
    }
  }
`;

export const ProductInformDescriptionWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: rgba(35, 81, 96, 1);
    margin-top: 122px;
  }
`;

export const ProductInformDescriptionMainText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: rgba(35, 81, 96, 1);
  }
`;

export const ProductInformDescriptionLine = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    height: 2px;
    background-color: rgba(35, 81, 96, 1);
    margin-top: 10px;
  }
`;

export const ProductInformDescriptionText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 38px;
  }
`;
