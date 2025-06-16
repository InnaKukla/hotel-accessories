import { Link } from "react-router";
import styled from "styled-components";

export const ProductNavLinksWrapper = styled.div`
  padding-bottom: 27px;
  padding-top: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductNavLinksList = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
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
  align-items: baseline;
  opacity: ${(props) => (props.page === "basket" ? 1 : 0.5)};
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
    opacity: ${(props) => (props.page === "basket" ? 1 : 0.5)};
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
    opacity: ${(props) => (props.page === "basket" ? 1 : 0.5)};
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
  align-items: center;
  opacity: ${(props) => (props.page === "basket" ? 0.5 : 1)};
  transform: opacity 0.3s ease;
  p {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(35, 81, 96, 1);
    word-break: break-word;
    overflow-wrap: break-word;
     width: 100%;;

  }
  @media screen and (max-width: 1024px) {
    display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === "basket" ? 0.5 : 1)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 10px;
    opacity: ${(props) => (props.page === "basket" ? 0.5 : 1)};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
      width: 130px;
    }
  }
  @media screen and (max-width: 480px) {
    p {
      width: 100%;
    }
  }
`;

export const ProductNavLinksBackButton = styled(Link)`
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    margin-left: auto;
  }
`;
