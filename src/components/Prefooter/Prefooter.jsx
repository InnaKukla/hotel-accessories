import React, { useState } from "react";
import { Container } from "../Header/Header.styled";
import {
  PrefooterSection,
  PrefooterWrapper,
  PrefooterTextWrapper,
  PrefooterMainText,
  PrefooterText,
  PrefooterFormWrapper,
  PrefooterTextField,
  PrefooterFormButton,
  PrefooterFormBox,
} from "./Prefooter.styled";
import formsOperations from "../../redux/forms/forms-operations";
import { useDispatch } from "react-redux";

const Prefooter = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [fieldValidity, setFieldValidity] = useState({
    companyName: null,
    email: null,
    phone: null,
    message: null,
  });
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // // Валідація
    // if (name === "phone") {
    //   setFieldValidity((prev) => ({
    //     ...prev,
    //     name: value.trim().length >= 2,
    //   }));
    // } else if (name === "email") {
    //   setFieldValidity((prev) => ({
    //     ...prev,
    //     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    //   }));
    // }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(formsOperations.sendContactForm(formData));
    } catch (error) {
      console.log(error.message);
    }
    setIsEmailTouched(false);
    resetForm();
  };

  const resetForm = () => {
    document.getElementById("form-prefooter").reset();
    setFormData({
      companyName: "",
      email: "",
      phone: "",
      message: "",
    });

    setFieldValidity({
      companyName: null,
      email: null,
      phone: null,
      message: null,
    });
  };

  return (
    <PrefooterSection>
      <Container>
        <PrefooterWrapper className="prefooter-wrapper">
          <PrefooterTextWrapper className="prefooter-text-wrapper">
            <PrefooterMainText className="prefooter-main-text">
              Contact Upscale Linen
            </PrefooterMainText>
            <PrefooterText className="prefooter-text">
              At Upscale Linen, we seamlessly blend timeless elegance with the
              comfort of everyday living, offering a range that caters to
              various needs. Our commitment to providing quality lifestyle
              essentials and exceptional customer service ensures a touch of
              sophistication in every space.
            </PrefooterText>
          </PrefooterTextWrapper>

          <PrefooterFormWrapper className="prefooter-form-wrapper">
            <PrefooterFormBox
              component="form"
              id="form-prefooter"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <PrefooterTextField
                sx={{ width: "100%" }}
                autoComplete="Name or name company"
                id="Name or name company"
                label="Name or name company"
                name="companyName"
                variant="outlined"
                value={formData.companyName}
                onChange={handleChange}
              />

              <PrefooterTextField
                sx={{ width: "100%" }}
                autoComplete="Email"
                id="email"
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
              <PrefooterTextField
                sx={{ width: "100%" }}
                autoComplete="Phone"
                id="phone"
                label="Phone"
                name="phone"
                type="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />

              <PrefooterTextField
                sx={{ width: "100%" }}
                autoComplete="Message"
                id="message"
                label="Message"
                name="message"
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
              />
              <PrefooterFormButton type="submit">
                Send Massage
              </PrefooterFormButton>
            </PrefooterFormBox>
          </PrefooterFormWrapper>
        </PrefooterWrapper>
      </Container>
    </PrefooterSection>
  );
};

export default Prefooter;
