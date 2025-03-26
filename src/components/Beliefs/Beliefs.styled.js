import styled from "styled-components";

export const BeliefsSection = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    padding-top: 164px;
    background-color: rgba(249, 249, 249, 1);
  }
`;

export const BeliefsMainText = styled.h2`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 40px;
  }
`;

export const BeliefsList = styled.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export const BeliefsItem = styled.li`
  @media screen and (min-width: 768px) {
    background-color: rgba(255, 255, 255, 1);
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const BeliefsItemTitle = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    color: rgba(35, 81, 96, 1);
    margin-top: 35px;
  }
`;

export const BeliefsItemText = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-top: 10px;
    color: rgba(35, 81, 96, 1);
  }
`;
