import React, { useState } from "react";
import ProductNavLinks from "../../shared/ProductNavLinks/ProductNavLinks";
import {
  PersonalAccountPartsText,
  PersonalAccountPartsWrap,
  RegistrationSection,
} from "./Registration.styled";
import { Container } from "../Header/Header.styled";
import RegistrationForm from "./RegistrationForm";
import { isUserLogin } from "../../redux/auth/auth-selectors";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import PersonalAccountUser from "./PersonalAccountUser";

const PersonalAccount = () => {
  const [isActive, setIsActive] = useState("login");
  const isLoggedUser = useSelector(isUserLogin);

  return (
    <RegistrationSection>
      <Container>
        <ProductNavLinks page={"registration"} />
        {isLoggedUser ? (
          <PersonalAccountUser />
        ) : (
          <>
            {" "}
            <PersonalAccountPartsWrap>
              <PersonalAccountPartsText
                isactive={isActive === "login"}
                onClick={() => setIsActive("login")}
              >
                Login
              </PersonalAccountPartsText>
              <PersonalAccountPartsText
                isactive={isActive === "registration"}
                onClick={() => setIsActive("registration")}
              >
                Registration
              </PersonalAccountPartsText>
            </PersonalAccountPartsWrap>
            {isActive === "login" && <LoginForm />}
            {isActive === "registration" && <RegistrationForm />}
          </>
        )}
      </Container>
    </RegistrationSection>
  );
};

export default PersonalAccount;
