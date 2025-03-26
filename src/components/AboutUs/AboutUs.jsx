import React, { useEffect, useState } from "react";
import { Container } from "../Header/Header.styled";
import LogoAboutUs from "../../assets/icons/logo-about-us.svg";
import ButtonBack from "../../assets/icons/back-icon.svg";

import Ellipse from "../../assets/icons/ellipse.svg";

import AboutUsImg from "../../assets/images/about-us.jpg";
import OurVisionBad from "../../assets/images/our-vision-bad.jpg";
import OurVisionBadMattress from "../../assets/images/our-vision-mattress.jpg";
import CoreValuesBlanket from "../../assets/images/core-values-blanket.jpg";
import CoreValuesPillow from "../../assets/images/core-values-pollow.jpg";

import OurCollection from "../../assets/images/our-collection.jpg";
import PlushBathEssentialsBathrobe from "../../assets/images/plush-bath-essentials-bathrobe.jpg";
import PlushBathEssentialsGirl from "../../assets/images/plush-bath-essentials-girl.jpg";
import PlushBathEssentialsTowel from "../../assets/images/plush-bath-essentials-towel.jpg";

import KitchenEleganceBeyondTowel from "../../assets/images/kitchen-elegance-beyond-towel.jpg";
import KitchenEleganceBeyondTowels from "../../assets/images/kitchen-elegance-beyond-towels.jpg";
import HospitalitySolutions from "../../assets/images/comprehensive-hospitality-solutions.jpg";

import JoinUs from "../../assets/images/join-us.jpg";
import {
  AboutUsSection,
  AboutUsWrapper,
  AboutUsLinksWrapper,
  AboutUsLinkTextWrapper,
  AboutUsLink,
  AboutUsLinkText,
  AboutUsLinksButtonBack,
  AboutUsSectionsWrapper,
  AboutUsOneSectionWrapper,
  AboutUsSectionMainText,
  AboutUsSectionText,
} from "./AboutUs.styled";

const aboutLinks = [
  { id: "about-us", label: "About us" },
  { id: "our-vision", label: "Our Vision" },
  { id: "core-values", label: "Core Values" },
  { id: "our-collection", label: "Our Collection" },
  { id: "plush-essentials", label: "Plush Bath Essentials" },
  { id: "kitchen-elegance", label: "Kitchen Elegance & Beyond" },
  { id: "hospitality-solutions", label: "Hospitality Solutions" },
  { id: "join-us", label: "Join Us in Elevating Your Lifestyle and Business" },
];

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("about-us");
  const [position, setPosition] = useState('before-our-solution');

  useEffect(() => {
    const handleScroll = () => {
      const ourVisionSection = document.getElementById("our-vision");
      const hospitalitySection = document.getElementById("hospitality-solutions");
      if (!ourVisionSection || !hospitalitySection) return;

      const ourVisionBottom  = ourVisionSection.offsetTop + ourVisionSection.offsetHeight;
      const hospitalityTop = hospitalitySection.offsetTop;
      const hospitalityBottom = hospitalityTop + hospitalitySection.offsetHeight;


      console.log("scrollY:", window.scrollY);
      console.log("hospitalityBottom:", hospitalityBottom);
      console.log("ourSolutionTop:", ourVisionBottom);

      if (window.scrollY < ourVisionBottom) {
        setPosition("before-our-solution")
      } else if (window.scrollY >= ourVisionBottom && window.scrollY > hospitalityBottom) {
        setPosition("hospitality")
      } else {
        setPosition("our-vision")
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    handleLink();
  }, []);

  const handleLink = () => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Додаємо невеликий відступ

      for (const section of aboutLinks) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            //   break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  return (
    <AboutUsSection>
      <Container>
        <AboutUsWrapper>
          <AboutUsLinksWrapper position={position}>
            <img
              src={LogoAboutUs}
              alt="Logo About Us"
              style={{ margin: "auto" }}
            />
            <AboutUsLinkTextWrapper>
              {aboutLinks.map((link) => (
                <li key={link.id} onClick={handleLink}>
                  <AboutUsLink
                    href={`#${link.id}`}
                    style={{
                      opacity: activeSection === link.id ? "100%" : "20%",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      {activeSection === link.id ? (
                        <img src={Ellipse} alt="Ellipse" />
                      ) : (
                        ""
                      )}
                      <AboutUsLinkText>{link.label}</AboutUsLinkText>
                    </div>
                  </AboutUsLink>
                </li>
              ))}
            </AboutUsLinkTextWrapper>

            <AboutUsLinksButtonBack to={-1}>
              <img src={ButtonBack} alt="Button Back" />
            </AboutUsLinksButtonBack>
          </AboutUsLinksWrapper>
          <div style={{ width: "750px" }}></div>
          <AboutUsSectionsWrapper>
            <AboutUsOneSectionWrapper id="about-us">
              <AboutUsSectionMainText>about us</AboutUsSectionMainText>
              <AboutUsSectionText>
                Upscale Linen is your gateway to refined living. In our world,
                luxury isn't an elusive escape or a precious possession
                carefully stored away. It's a continuous embrace, an enduring
                partnership that becomes an integral part of your hospitality
                space, or getaway retreat.
              </AboutUsSectionText>
              <img
                src={AboutUsImg}
                alt="about us img"
                style={{ maxWidth: "1100px" }}
              />
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="our-vision">
              <AboutUsSectionMainText>Our Vision</AboutUsSectionMainText>
              <AboutUsSectionText>
                Upscale Linen is your gateway to refined living. In our world,
                luxury isn't an elusive escape or a precious possession
                carefully stored away. It's a continuous embrace, an enduring
                partnership that becomes an integral part of your hospitality
                space, or getaway retreat.
              </AboutUsSectionText>
              <div>
                <img
                  src={OurVisionBadMattress}
                  alt="Our Vision Bad Mattress"
                  width={366}
                  style={{ maxWidth: "366px" }}
                />
                <img
                  src={OurVisionBad}
                  alt="Our Vision Bad"
                  style={{ maxWidth: "739.5px" }}
                />
              </div>
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="core-values">
              <AboutUsSectionMainText>Core Values</AboutUsSectionMainText>
              <AboutUsSectionText>
                Quality: From the plush embrace of our bedding to the
                functionality of kitchen essentials, and the soft touch of our
                towels, Upscale Linen products are crafted with meticulous
                attention to detail, ensuring the highest quality and care in
                the manufacturing process.
              </AboutUsSectionText>
              <div>
                <img
                  src={CoreValuesBlanket}
                  alt="Core Values Blanket"
                  style={{ maxWidth: "739.5px" }}
                />
                <img
                  src={CoreValuesPillow}
                  alt="Core Values Pillow"
                  style={{ maxWidth: "366px" }}
                />
              </div>
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="our-collection">
              <AboutUsSectionMainText>Our Collection</AboutUsSectionMainText>
              <AboutUsSectionText>
                Luxurious Bedding Experience: Immerse yourself in unparalleled
                comfort with Upscale Linen's bedding range. Sheets, duvets, and
                comforters redefine sleep, creating a tranquil haven for guests.
                Quality craftsmanship ensures a restful repose, exceeding
                expectations.
              </AboutUsSectionText>
              <img
                src={OurCollection}
                alt="Our Collection"
                style={{ maxWidth: "1100px" }}
              />
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="plush-essentials">
              <AboutUsSectionMainText>
                Plush Bath Essentials
              </AboutUsSectionMainText>
              <AboutUsSectionText>
                Indulge the senses with opulent bath collections. From plush
                bathrobes to high-quality towels, Upscale Linen elevates the
                bathroom ambiance. Softness and absorbency redefine the bathing
                ritual, making us the trusted choice for hotels, country clubs,
                rentals, and hospitality spaces.
              </AboutUsSectionText>
              <div>
                <img
                  src={PlushBathEssentialsGirl}
                  alt="Plush Bath Essentials Girl"
                  style={{ maxWidth: "367px" }}
                />
                <img
                  src={PlushBathEssentialsTowel}
                  alt="Plush Bath Essentials Towel"
                  style={{ maxWidth: "368px" }}
                />
                <img
                  src={PlushBathEssentialsBathrobe}
                  alt="Plush Bath Essentials Bathrobe"
                  style={{ maxWidth: "368px" }}
                />
              </div>
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="kitchen-elegance">
              <AboutUsSectionMainText>
                Kitchen Elegance & Beyond
              </AboutUsSectionMainText>
              <AboutUsSectionText>
                Upscale Linen is your gateway to refined living. In our world,
                luxury isn't an elusive escape or a precious possession
                carefully stored away. It's a continuous embrace, an enduring
                partnership that becomes an integral part of your hospitality
                space, or getaway retreat.
              </AboutUsSectionText>
              <div style={{ display: "flex" }}>
                <img
                  src={KitchenEleganceBeyondTowel}
                  alt="Kitchen Elegance Beyond Towel"
                  style={{ maxWidth: "739.5px" }}
                />
                <img
                  src={KitchenEleganceBeyondTowels}
                  alt="Kitchen Elegance Beyond Towels"
                  style={{ maxWidth: "366px" }}
                />
              </div>
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="hospitality-solutions">
              <AboutUsSectionMainText>
                Comprehensive Hospitality Solutions
              </AboutUsSectionMainText>
              <AboutUsSectionText>
                Upscale Linen is not just a linens provider; we're your partner
                for comprehensive hospitality solutions. From bedrooms to
                bathrooms, kitchens, and beyond, our commitment to quality
                extends to a wide array of products, ensuring every corner of
                your space reflects opulence and refinement. Join us in shaping
                the future of hospitality with Upscale Linen – where luxury is a
                lifestyle, and sophistication knows no boundaries.
              </AboutUsSectionText>
              <img
                src={HospitalitySolutions}
                alt="Comprehensive Hospitality Solutions"
                style={{ maxWidth: "1100px" }}
              />
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper>
              <AboutUsSectionMainText id="join-us">
                Join Us in Elevating Your Lifestyle and Business
              </AboutUsSectionMainText>
              <AboutUsSectionText>
                Upscale Linen invites you to be part of a journey where everyday
                moments and business settings are transformed into extraordinary
                experiences. As we extend our offerings, we remain committed to
                redefining the art of elegance in your daily life and
                hospitality spaces – where luxury is not just a product but a
                way of living, and sophistication knows no boundaries.
              </AboutUsSectionText>
              <img
                src={JoinUs}
                alt="Join Us in Elevating Your Lifestyle and Business"
                style={{ maxWidth: "1100px" }}
              />
            </AboutUsOneSectionWrapper>
          </AboutUsSectionsWrapper>
        </AboutUsWrapper>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;
