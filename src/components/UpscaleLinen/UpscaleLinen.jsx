import React from "react";
import { Container } from "../Header/Header.styled";
import {
  UpscaleLinenSection,
  UpscaleLinenTitle,
  UpscaleLinenMainText,
  UpscaleLinenText,
  UpscaleLinenTextWrap,
  UpscaleLinenItemWrap,
  UpscaleLinenTextWrapRevers,
} from "./UpscaleLinen.styled";
import CompositionTwoTowel from "../../assets/images/composition-two-towel-swans.jpg";
import UpscaleLinenTowel from "../../assets/images/upscale-linen-towel.jpg";

const UpscaleLinen = () => {
  return (
    <UpscaleLinenSection>
      <Container>
      
          <UpscaleLinenTitle>
            Define Excellence in Every Room with Our Luxurious Linens
          </UpscaleLinenTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <UpscaleLinenItemWrap>
            <img
              src={UpscaleLinenTowel}
              alt="Upscale Linen Towel"
              style={{ width: "50%" }}
            />
            <UpscaleLinenTextWrap>
              <UpscaleLinenMainText className="upscale-linen-main-text">
                Upscale Linen
              </UpscaleLinenMainText>
              <UpscaleLinenText className="upscale-linen-text">
                Rooted in a rich history of excellence and armed with a deep
                understanding of the hospitality industry's needs, we offer more
                than just products but complete textile solutions that enhance
                guest experiences.
              </UpscaleLinenText>
            </UpscaleLinenTextWrap>
          </UpscaleLinenItemWrap>

          <UpscaleLinenItemWrap>
            <UpscaleLinenTextWrapRevers>
              <UpscaleLinenMainText className="upscale-linen-main-text">
                Upscale Linen
              </UpscaleLinenMainText>
              <UpscaleLinenText className="upscale-linen-text">
                We embarked on our journey with a clear and compelling mission:
                to redefine luxury and comfort in hospitality by providing
                unparalleled quality bath and bed linens at competitive prices,
                setting a new benchmark for excellence.
              </UpscaleLinenText>
            </UpscaleLinenTextWrapRevers>
            <img
              src={CompositionTwoTowel}
              alt="Composition Two Towel"
              style={{ width: "50%" }}
            />
          </UpscaleLinenItemWrap>
        </div>

      </Container>
    </UpscaleLinenSection>
  );
};

export default UpscaleLinen;
