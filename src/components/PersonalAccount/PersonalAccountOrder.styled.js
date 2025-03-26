import styled from "styled-components";

export const PersonalAccountOrderWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const PersonalAccountOrderList = styled.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
  }
`;

export const PersonalAccountOrderItem = styled.li`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
    gap: 10px;
    display: grid;
    grid-template-columns: 2.9fr 0.9fr 1.5fr repeat(2, 1fr) 2fr;
    justify-items: start;

  }
`;

export const PersonalAccountOrderCodeWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const PersonalAccountOrderCode = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    color: rgba(35, 81, 96, 1);
  }
`;

export const PersonalAccountOrderTitleWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0 20px 20px;
    justify-content: space-between;
  }
`;

export const PersonalAccountOrderTitle = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 20px;
    line-height: 110.00000000000001%;
    color: rgba(35, 81, 96, 1);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover{
      -webkit-line-clamp: none;
      /* display: flex; */
    }
  }
`;

export const PersonalAccountOrderTextWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 80px;
  }
`;

export const PersonalAccountOrderText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    opacity: 100%;
    span {
      opacity: 50%;
    }
  }
`;

export const PersonalAccountOrderDetailsList = styled.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
`;

export const PersonalAccountOrderDetailsItem = styled.li`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    opacity: 100%;
   
  }
`;

export const PersonalAccountOrderDetailsTextWrap = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const PersonalAccountOrderDetailsTitle = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    
  }
`;

export const PersonalAccountOrderDetailsTextTitle = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    opacity: 20%;
  }
`;
