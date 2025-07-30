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
  AboutUsSectionImgMiddle,
  AboutUsSectionImgLarge,
  AboutUsSectionImgSmall,
  AboutUsSectionImgTrio,
  AboutUsLinkImg,
  AboutUsLinkWrap,
  AboutUsLine,
  AboutUsSectionWrapHeader,
} from "./AboutUs.styled";
import { useMediaQuery } from "react-responsive";
import { Autocomplete, TextField } from "@mui/material";

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
  const [value, setValue] = useState(aboutLinks[0]);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [position, setPosition] = useState("100px");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 400;
      let current = aboutLinks[0].id;

      for (const link of aboutLinks) {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.getBoundingClientRect().top;

          if (top - offset < 0) {
            current = link.id;
          }
        }
      }
      setActiveSection(current);

      const hospitality = document.getElementById("hospitality-solutions");
      const joinUs = document.getElementById("join-us");
      const hospitalityTop = hospitality?.getBoundingClientRect().top || 0;
      const joinUsTop = joinUs?.getBoundingClientRect().top || 0;

      if (joinUsTop <= 100) {
        setPosition("-170px");
      } else if (hospitalityTop <= 100) {
        setPosition("50px");
      } else {
        setPosition("150px");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const found = aboutLinks.find((link) => link.id === activeSection);

    if (found) {
      setValue(found);
    }
  }, [activeSection]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    console.log(el);
    let offset;
    if (el) {
      if (isMobile) {
        offset = 300;
      } else {
        offset = 600;
      }
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      // el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (label) => {
console.log(label);

  }

  return (
    <AboutUsSection>
      <Container>
        <AboutUsWrapper>
          <AboutUsLinksWrapper positionSection={activeSection} top={position}>
            <AboutUsSectionWrapHeader>
              <AboutUsLinkImg
                src={LogoAboutUs}
                alt="Logo About Us"
                // loading="lazy"
              />

              {isMobile ? (
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setValue(newValue);
                      handleScrollTo(newValue.id);
                    }
                  }}
                  disablePortal
                  options={aboutLinks}
                  getOptionLabel={(option) => option.label}
                  sx={{
                    width: "80%",
                    "& .MuiOutlinedInput-root": {
                      minWidth: "150px",
                      "&.Mui-focused fieldset": {
                        border: "1px solid rgb(133, 133, 133, 2)",
                      },
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={(input) => {
                        if (input) {
                          input.readOnly = true;
                        }
                      }}
                    />
                  )}
                  renderOption={(props, option) => (
                    <li {...props} key={option.id}>
                      <AboutUsLink
                        to={`/about#${option.id}`}
                        style={{
                          opacity: activeSection === option.id ? "100%" : "20%",
                          textDecoration: "none",
                          // textAlign: "justify",
                        }}
                      >
                        <AboutUsLinkWrap onClick={() => handleClick(option.label)}>
                          {activeSection === option.id ? (
                            <img src={Ellipse} alt="Ellipse" />
                          ) : (
                            ""
                          )}
                          <AboutUsLinkText>{option.label}</AboutUsLinkText>
                        </AboutUsLinkWrap>
                      </AboutUsLink>
                    </li>
                  )}
                />
              ) : (
                <AboutUsLinkTextWrapper>
                  {aboutLinks.map((link) => (
                    <li key={link.id}>
                      <AboutUsLink
                        href={`#${link.id}`}
                        style={{
                          opacity: activeSection === link.id ? "100%" : "20%",
                          textDecoration: "none",
                        }}
                      >
                        <AboutUsLinkWrap>
                          {activeSection === link.id ? (
                            <img src={Ellipse} alt="Ellipse" />
                          ) : (
                            ""
                          )}
                          <AboutUsLinkText>{link.label}</AboutUsLinkText>
                        </AboutUsLinkWrap>
                      </AboutUsLink>
                    </li>
                  ))}
                </AboutUsLinkTextWrapper>
              )}
            </AboutUsSectionWrapHeader>

            {/* <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{links}</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
    
                      onChange={handleChange}
                    >
                      {aboutLinks.map((link) => (
                        <MenuItem>
                          <AboutUsLink
                            href={`#${link.id}`}
                            style={{
                              opacity: activeSection === link.id ? "100%" : "20%",
                              textDecoration: "none",
                            }}
                          >
                            <AboutUsLinkWrap>
                              {activeSection === link.id ? (
                                <img src={Ellipse} alt="Ellipse" />
                              ) : (
                                ""
                              )}
                              <AboutUsLinkText>{link.label}</AboutUsLinkText>
                            </AboutUsLinkWrap>
                          </AboutUsLink>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box> */}

            <AboutUsLinksButtonBack to={-1}>
              <img src={ButtonBack} alt="Button Back" />
            </AboutUsLinksButtonBack>
          </AboutUsLinksWrapper>
          <AboutUsLine></AboutUsLine>
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
              <AboutUsSectionImgLarge
                src={AboutUsImg}
                alt="about us img"
                loading="lazy"
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
                <AboutUsSectionImgSmall
                  src={OurVisionBadMattress}
                  alt="Our Vision Bad Mattress"
                  loading="lazy"
                />
                <AboutUsSectionImgMiddle
                  src={OurVisionBad}
                  alt="Our Vision Bad"
                  loading="lazy"
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
                <AboutUsSectionImgMiddle
                  src={CoreValuesBlanket}
                  alt="Core Values Blanket"
                  loading="lazy"
                />
                <AboutUsSectionImgSmall
                  src={CoreValuesPillow}
                  alt="Core Values Pillow"
                  loading="lazy"
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
              <AboutUsSectionImgLarge
                src={OurCollection}
                alt="Our Collection"
                loading="lazy"
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
              <AboutUsSectionImgTrio>
                <img
                  src={PlushBathEssentialsGirl}
                  alt="Plush Bath Essentials Girl"
                  loading="lazy"
                />
                <img
                  src={PlushBathEssentialsTowel}
                  alt="Plush Bath Essentials Towel"
                  loading="lazy"
                />
                <img
                  src={PlushBathEssentialsBathrobe}
                  alt="Plush Bath Essentials Bathrobe"
                  loading="lazy"
                />
              </AboutUsSectionImgTrio>
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
                <AboutUsSectionImgMiddle
                  src={KitchenEleganceBeyondTowel}
                  alt="Kitchen Elegance Beyond Towel"
                  loading="lazy"
                />
                <AboutUsSectionImgSmall
                  src={KitchenEleganceBeyondTowels}
                  alt="Kitchen Elegance Beyond Towels"
                  loading="lazy"
                />
              </div>
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="hospitality-solutions">
              <AboutUsSectionMainText>
                Comprehensive Hospitality Solutions
              </AboutUsSectionMainText>
              <AboutUsSectionText>
                Upscale Linen is not just a linens provider: we're your partner
                for comprehensive hospitality solutions. From bedrooms to
                bathrooms, kitchens, and beyond, our commitment to quality
                extends to a wide array of products, ensuring every corner of
                your space reflects opulence and refinement. Join us in shaping
                the future of hospitality with Upscale Linen – where luxury is a
                lifestyle, and sophistication knows no boundaries.
              </AboutUsSectionText>
              <div style={{ display: "flex" }}>
                <AboutUsSectionImgLarge
                  src={HospitalitySolutions}
                  alt="Comprehensive Hospitality Solutions"
                  loading="lazy"
                />
              </div>
            </AboutUsOneSectionWrapper>

            <AboutUsOneSectionWrapper id="join-us">
              <AboutUsSectionMainText>
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
              <AboutUsSectionImgLarge
                src={JoinUs}
                alt="Join Us in Elevating Your Lifestyle and Business"
                loading="lazy"
              />
            </AboutUsOneSectionWrapper>
          </AboutUsSectionsWrapper>
        </AboutUsWrapper>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;
