import styled from "styled-components";

export const UpscaleLinenSection = styled.section`
 padding-top: 200px;
    @media screen and (max-width: 1024px) {
      padding-top: 150px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 50px;
  }
`;

export const UpscaleLinenTextWrap = styled.div`
  width: 50%;
    @media screen and (max-width: 1024px) {
      width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const UpscaleLinenImg = styled.img`
  width: 50%;
    @media screen and (max-width: 1024px) {
      width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const UpscaleLinenTextWrapRevers = styled.div`
  text-align: right;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 1024px) {
      text-align: right;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media screen and (max-width: 768px) {
    text-align: right;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  }
  @media screen and (max-width: 480px) {
  }
`;


export const UpscaleLinenTitle = styled.h2`
font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 33.6px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    text-align: center;
    margin-bottom: 40px;
    @media screen and (max-width: 1024px) {
      font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 33.6px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    text-align: center;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    font-family: Rebelton;
  font-weight: 400;
  font-size: 24px;
  line-height: 33.6px;
  letter-spacing: 0%;
  color: rgba(35, 81, 96, 1);
  text-align: center;
  margin-bottom: 40px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const UpscaleLinenMainText = styled.h2`
 font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: rgba(35, 81, 96, 1);
    @media screen and (max-width: 1024px) {
      font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: rgba(35, 81, 96, 1);
    &:first-child{
    text-align: start;
  }
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: rgba(35, 81, 96, 1);
  &:first-child{
    text-align: end;
  }
  }
  @media screen and (max-width: 480px) {
  }
`;

export const UpscaleLinenItemWrap = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 110px;
    @media screen and (max-width: 1024px) {
      display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const UpscaleLinenItemWrapRevers = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 110px;
    @media screen and (max-width: 1024px) {
      display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const UpscaleLinenText = styled.p`
max-width: 538px;
  margin-top: 20px;
  /* margin-bottom: 60px; */
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(35, 81, 96, 1);
  max-width: 538px;
  @media screen and (max-width: 1024px) {
   
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;
