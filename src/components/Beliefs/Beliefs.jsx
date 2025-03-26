import React from "react";
import {
  BeliefsItem,
  BeliefsItemText,
  BeliefsItemTitle,
  BeliefsList,
  BeliefsMainText,
  BeliefsSection,
} from "./Beliefs.styled";
import { Container } from "../Header/Header.styled";
import BeliefsBad from "../../assets/images/beliefs-bad.jpg";
import CleanSoftTowels from "../../assets/images/clean-soft-towels.jpg";
import WhiteStackBathTowels from "../../assets/images/white-stack-bath-towels.jpg";

const beliefsList = [
  {
    image: WhiteStackBathTowels,
    title: "Quality Excellence at Best Value",
    text: "Our unwavering commitment to quality, coupled with our strategic pricing, ensures every aspect of our business is guided by the principle of delivering luxury and durability at the best value.",
  },
  {
    image: CleanSoftTowels,
    title: "Customer Centricity",
    text: "Understanding the unique needs of our clientele is at the heart of what we do. We believe in building strong relationships based on trust, reliability, and unparalleled customer service.",
  },
  {
    image: BeliefsBad,
    title: "Integrity at Our Core",
    text: "We operate with the highest level of integrity and transparency. Our reputation as a trustworthy partner is paramount, and we uphold these values in every interaction.",
  },
];
const Beliefs = () => {
  return (
    <BeliefsSection>
      <Container>
        <BeliefsMainText>The fundamental beliefs that guide us</BeliefsMainText>

        <BeliefsList>
          {beliefsList?.map((item) => (
            <BeliefsItem key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "460px" }}
              />
              <div style={{ padding: "0 20px 20px 20px" }}>
                <BeliefsItemTitle>{item.title}</BeliefsItemTitle>
                <BeliefsItemText>{item.text}</BeliefsItemText>
              </div>
            </BeliefsItem>
          ))}
        </BeliefsList>
      </Container>
    </BeliefsSection>
  );
};

export default Beliefs;
