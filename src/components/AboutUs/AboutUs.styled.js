import { Link } from "react-router";
import styled from "styled-components";

export const AboutUsSection = styled.section`
  padding-top: 70px;
  background-color: rgba(249, 249, 249, 1);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    padding-top: 90px;
    background-color: rgba(249, 249, 249, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsSectionWrapHeader = styled.div`
  
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 40px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;


export const AboutUsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    display: flex;
    position: relative;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const AboutUsLinksWrapper = styled.div`
  position: fixed;
  top: ${(top) => top || "150px"};
  z-index: 1000;
  text-align: center;
  position: fixed;
  width: 30%;
  transition: top 0.3s ease-in-out;
  @media screen and (max-width: 1024px) {
    text-align: center;
    position: fixed;
    width: 30%;
    top: ${(top) => top || "150px"};
    transition: top 0.3s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    width: 100%;
    position: fixed;
    z-index: 1000;
    background-color: white;
    top: 96px;
    flex-wrap: wrap;
    grid-template-columns: 3fr 1fr;;
    /* justify-items: normal; */
    /* align-items: center; */
    padding: 20px 0;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 23px;
  }
`;

export const AboutUsLinkImg = styled.img`
  margin: auto;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    /* margin-left: 15px; */
  }
  @media screen and (max-width: 480px) {
    /* margin: auto; */
  }
`;

export const AboutUsLinkTextWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    text-decoration: none;
    text-align: justify;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsLinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsLinkText = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: rgba(70, 70, 70, 1);
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: rgba(70, 70, 70, 1);
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: rgba(70, 70, 70, 1);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsLine = styled.div`
  width: 550px;
  @media screen and (max-width: 1024px) {
    width: 450px;
  }
  @media screen and (max-width: 768px) {
    width: 0;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsLinksButtonBack = styled(Link)`
  margin: auto;
  background: none;
  border: none;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsSectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70%;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 100px;
  }
`;

export const AboutUsOneSectionWrapper = styled.div`
  scroll-margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  &:first-child {
    margin-top: 0;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    &:first-child {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 768px) {
    scroll-margin-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    padding-top: 50px;
    &:first-child {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 480px) {
    scroll-margin-top: 300px;
    margin-top: 100px;
    margin-top: 0;
    /* padding-top: 100px; */
    &:first-child {
      padding-top: 100px;
    }
  }
`;

export const AboutUsSectionMainText = styled.h2`
  font-family: Angst;
  font-weight: 50;
  font-size: 96px;
  line-height: 105.6px;
  letter-spacing: 0%;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  word-break: break-word;
  @media screen and (max-width: 1024px) {
    font-family: Angst;
    font-weight: 50;
    font-size: 70px;
    line-height: 90px;
    text-align: center;
    max-width: 500px;
    color: rgba(0, 0, 0, 1);
  }
  @media screen and (max-width: 768px) {
    font-family: Angst;
    font-weight: 50;
    font-size: 50px;
    line-height: 70px;
    text-align: center;
    word-break: break-word;
    color: rgba(0, 0, 0, 1);
  }
  @media screen and (max-width: 480px) {
    padding-top: 30px;
  }
`;

export const AboutUsSectionImgSmall = styled.img`
  max-width: 33%;
  /* max-width: 366px; */
  @media screen and (max-width: 1024px) {
    /* max-width: 165.7px; */
  }
  @media screen and (max-width: 768px) {
    max-width: 33.1%;
    /* max-width: 105.9px; */
  }
  @media screen and (max-width: 480px) {
  }
`;
export const AboutUsSectionImgLarge = styled.img`
  max-width: 100%;
  /* max-width: 1100px; */
  @media screen and (max-width: 1024px) {
    /* max-width: 500px; */
  }
  @media screen and (max-width: 768px) {
    /* max-width: 320px; */
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsSectionImgTrio = styled.div`
  img {
    max-width: 33.28%;
  }
  img:first-child {
    max-width: 33.2%;
  }
  img:last-child {
    max-width: 33.2%;
  }

  /* img:first-child {
      max-width: 367px;
    } */

  /* img {
      max-width: 368px;
    }
    img:first-child {
      max-width: 367px;
    } */
  @media screen and (max-width: 1024px) {
    /* img {
      max-width: 165.9px;
    }
    img:first-child {
      max-width: 165.5px;
    }
    img:last-child {
      max-width: 165.5px;
    } */
  }
  @media screen and (max-width: 768px) {
    /* img {
    max-width: 106px;
  }
  img:first-child {
    max-width: 106px;
  }
  img:last-child {
    max-width: 106px;
  } */
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AboutUsSectionImgMiddle = styled.img`
  /* max-width: 739.5px; */
  max-width: 67%;
  @media screen and (max-width: 1024px) {
    /* max-width: 334.5px; */
  }
  @media screen and (max-width: 768px) {
    /* max-width: 66.9%; */
    /* max-width: 214.1px; */
    max-width: 66.85%;
  }
  @media screen and (max-width: 480px) {
    max-width: 66.85%;
  }
`;

export const AboutUsSectionText = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: center;
  color: rgba(70, 70, 70, 1);
  max-width: 935px;
  margin-top: 40px;
  margin-bottom: 60px;
  @media screen and (max-width: 1024px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: rgba(70, 70, 70, 1);
    max-width: 500px;
    margin-top: 40px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 768px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: rgba(70, 70, 70, 1);
    /* max-width: 210px; */
    margin-top: 40px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 480px) {
  }
`;
