import styled from "styled-components";

export const BeliefsSection = styled.section`
  padding-top: 150px;
  background-color: rgba(249, 249, 249, 1);
  min-width: 100vw;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding-top: 100px;
  }
`;

export const BeliefsMainText = styled.h2`
  font-family: Rebelton;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: rgba(35, 81, 96, 1);
  margin-bottom: 40px;
  text-align: left;
  @media screen and (max-width: 1024px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 40px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 40px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
  }

`;

export const BeliefsList = styled.ul`
display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  gap: 40px;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const BeliefsItem = styled.li`
  display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1024px) {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  }
  @media screen and (max-width: 480px) {

  }
`;

export const BeliefsImg = styled.img`
  max-width: 100%;
`;

export const BeliefsItemTitle = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  color: rgba(35, 81, 96, 1);
  margin-top: 35px;

`;

export const BeliefsItemText = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-top: 10px;
  color: rgba(35, 81, 96, 1);

`;
