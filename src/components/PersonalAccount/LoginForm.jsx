import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import {
  Form,
  Label,
  RegistrationButton,
  RegistrationFieldWrapper,
  RegistrationMainText,
  RegistrationWrapper,
} from "./Registration.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [activeField, setActiveField] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleBlur = (field) => {
    formik.setFieldTouched(field, true);
    setActiveField("");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  // Валідація

  const validationSchema = Yup.object({
    email: Yup.string().email("Incorrect email").required("Enter email"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Submitted values:", values);
      await dispatch(login(values));
      
      setFormSubmitted(true);
      resetForm({ values: initialValues });
      navigate("/account") 
    },
  });
  return (
    <RegistrationWrapper>
      <RegistrationMainText>Sing in</RegistrationMainText>
      <Form onSubmit={formik.handleSubmit}>
        <RegistrationFieldWrapper>
          <label>Purchasing contact email</label>
          <Label
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={() => handleBlur("email")}
            onFocus={() => setActiveField("email")}
            error={
              (formSubmitted || formik.touched.email) &&
              Boolean(formik.errors.email)
            }
            helperText={
              (formSubmitted || formik.touched.email) && formik.errors.email
            }
          />
        </RegistrationFieldWrapper>

        <RegistrationFieldWrapper>
          <label>Password</label>
          <Label
            fullWidth
            id="password"
            name="password"
            //   label="Password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={() => handleBlur("password")}
            onFocus={() => setActiveField("password")}
            error={
              (formSubmitted || formik.touched.password) &&
              Boolean(formik.errors.password)
            }
            helperText={
              (formSubmitted || formik.touched.password) &&
              formik.errors.password
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityIcon
                        style={{
                          color:
                            activeField === "password" ? "#429DF0" : "#b2abab",
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        style={{
                          color:
                            activeField === "password" ? "#429DF0" : "#b2abab",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </RegistrationFieldWrapper>

        <RegistrationButton
          type="submit"
          variant="contained"
          disabled={formik.isSubmitting}
        >
          login
        </RegistrationButton>
      </Form>
    </RegistrationWrapper>
  );
};

export default LoginForm;
