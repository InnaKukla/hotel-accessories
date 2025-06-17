import styled from "styled-components";

export const PersonalAccountOrderWrap = styled.div`
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderItem = styled.li`
  grid-template-columns: 1.7fr 3fr;
  display: grid;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 3fr;
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderCodeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderCode = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  color: rgba(35, 81, 96, 1);
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 20px 20px;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0 20px 20px;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0 20px 10px;
    justify-content: space-between;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderTitle = styled.p`
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
  &:hover {
    -webkit-line-clamp: none;
    /* display: flex; */
  }
  @media screen and (max-width: 1024px) {
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
    &:hover {
      -webkit-line-clamp: none;
      /* display: flex; */
    }
  }
  @media screen and (max-width: 768px) {
    text-align: left;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 18px;
    line-height: 110.00000000000001%;
    color: rgba(35, 81, 96, 1);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      -webkit-line-clamp: none;
      /* display: flex; */
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderTextWrap = styled.div`
  gap: 20px;
  align-items: center;
  display: flex;
  @media screen and (max-width: 1024px) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 3fr 1fr 3fr 3fr;
    padding-top: 5px;
    padding-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 3fr 1fr 3fr 2fr;
    column-gap: 5px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(35, 81, 96, 1);
  opacity: 100%;
  flex-wrap: wrap;
  span {
    opacity: 50%;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 40px;
  padding-top: 40px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(35, 81, 96, 0.2);
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(35, 81, 96, 1);
  opacity: 100%;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    opacity: 100%;
    gap: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    opacity: 100%;
    gap: 5px;
    span {
      text-align: end;
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderDetailsTextWrap = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderDetailsTitle = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0%;
  color: rgba(35, 81, 96, 1);
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PersonalAccountOrderDetailsTextTitle = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(35, 81, 96, 1);
  opacity: 20%;
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    opacity: 20%;
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    opacity: 20%;
    text-align: start;
  }
  @media screen and (max-width: 480px) {
  }
`;
