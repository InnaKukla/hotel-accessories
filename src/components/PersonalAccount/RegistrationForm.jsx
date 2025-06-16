import React, { useState } from "react";

import { register } from '../../redux/auth/auth-operations';
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
import { useDispatch } from "react-redux";

const RegistrationForm = () => {
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

  // Валідація

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Enter the name of the company"),
    // firstName: Yup.string().required("Enter your first name"),
    // lastName: Yup.string().required("Enter your last name"),
    phone: Yup.string()
      .matches(/^\+?\d{10,15}$/, "Incorrect phone number")
      .required("Enter phone"),
    email: Yup.string().email("Incorrect email").required("Enter email"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one digit")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@$!%*?&)")
      .required("This field is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match.")
      .required("This field is required."),
  });

  const initialValues = {
    companyName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // console.log("Submitted values:", values);
      await dispatch(register(values));
      setFormSubmitted(true);
      resetForm({values: initialValues});
    },
  });
  return (
    <RegistrationWrapper>
      <RegistrationMainText>Registration</RegistrationMainText>
      <Form onSubmit={formik.handleSubmit}>
        <RegistrationFieldWrapper>
          <label>
            Company Name<span>*</span>
          </label>
          <Label
            fullWidth
            required
            id="companyName"
            name="companyName"
            //   label="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={() => handleBlur("companyName")}
            onFocus={() => setActiveField("companyName")}
            error={
              (formSubmitted || formik.touched.companyName) &&
              Boolean(formik.errors.companyName)
            }
            helperText={
              (formSubmitted || formik.touched.companyName) &&
              formik.errors.companyName
            }
          />
        </RegistrationFieldWrapper>

        <RegistrationFieldWrapper>
          <label>Purchasing contact name</label>
          <Label
            style={{ marginBottom: "20px" }}
            fullWidth
            id="firstName"
            name="firstName"
            label="First"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={() => handleBlur("firstName")}
            onFocus={() => setActiveField("firstName")}
            error={
              (formSubmitted || formik.touched.firstName) &&
              Boolean(formik.errors.firstName)
            }
            helperText={
              (formSubmitted || formik.touched.firstName) &&
              formik.errors.firstName
            }
          />

          <Label
            fullWidth
            id="lastName"
            name="lastName"
            label="Last"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={() => handleBlur("lastName")}
            onFocus={() => setActiveField("lastName")}
            error={
              (formSubmitted || formik.touched.lastName) &&
              Boolean(formik.errors.lastName)
            }
            helperText={
              (formSubmitted || formik.touched.lastName) &&
              formik.errors.lastName
            }
          />
        </RegistrationFieldWrapper>

        <RegistrationFieldWrapper>
          <label>
            Purchasing contact email<span>*</span>
          </label>
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
          <label>
            Phone<span>*</span>
          </label>
          <Label
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={() => handleBlur("phone")}
            onFocus={() => setActiveField("phone")}
            error={
              (formSubmitted || formik.touched.phone) &&
              Boolean(formik.errors.phone)
            }
            helperText={
              (formSubmitted || formik.touched.phone) && formik.errors.phone
            }
          />
        </RegistrationFieldWrapper>

        <RegistrationFieldWrapper>
          <label>
            Password<span>*</span>
          </label>
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
                            activeField === "password"
                              ? "rgba(35, 81, 96, 1)"
                              : "#b2abab",
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        style={{
                          color:
                            activeField === "password"
                              ? "rgba(35, 81, 96, 1)"
                              : "#b2abab",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </RegistrationFieldWrapper>

        <RegistrationFieldWrapper>
          <label>
            Confirm Password<span>*</span>
          </label>
          <Label
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            //   label="Password"
            type={showPassword ? "text" : "password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={() => handleBlur("confirmPassword")}
            onFocus={() => setActiveField("confirmPassword")}
            error={
              (formSubmitted || formik.touched.confirmPassword) &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              (formSubmitted || formik.touched.confirmPassword) &&
              formik.errors.confirmPassword
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
                            activeField === "password"
                              ? "rgba(35, 81, 96, 1)"
                              : "#b2abab",
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        style={{
                          color:
                            activeField === "password"
                              ? "rgba(35, 81, 96, 1)"
                              : "#b2abab",
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
          // disabled={formik.isSubmitting}
        >
          submit
        </RegistrationButton>
      </Form>
    </RegistrationWrapper>
  );
};

export default RegistrationForm;
