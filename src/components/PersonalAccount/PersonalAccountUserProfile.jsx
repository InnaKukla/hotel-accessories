import React, { useEffect, useState } from "react";
import {
  ButtonBox,
  ButtonSave,
  InfoWrapper,
} from "./PersonalAccountUser.styled";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/system";
import { TextField } from "@mui/material";
import { updateUserProfile } from "../../redux/auth/auth-operations";
import _ from "lodash";
import Loader from "../../shared/Loader/Loader";
import { isLoading } from "../../redux/auth/auth-selectors";

const PersonalAccountUserProfile = ({ user }) => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const { companyName, firstName, lastName, phone } = user || {};

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialFormData = {
    companyName: companyName || "",
    firstName: firstName || "",
    lastName: lastName || "",
    phone: phone || "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(_.isEqual(formData, initialFormData));
  }, [formData, initialFormData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = async () => {
    await dispatch(updateUserProfile(formData));
  };

  return (
    <>
    {loading ? <Loader/> : (<InfoWrapper>
      <div>
        <Grid container style={{ display: "flex", gap: "10px" }}>
          {Object.keys(formData).map((key) => (
            <Grid item key={key}>
              <Box marginTop={1}>
                <TextField
                  style={{ width: "100%", maxWidth: 400 }}
                  multiline
                  maxRows={4}
                  id={key}
                  label={key.charAt(0).toLocaleUpperCase() + key.slice(1)}
                  value={formData[key]}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
          ))}
          <Grid item key={user.id}>
            <Box marginTop={1}>
              <TextField
                style={{ width: "100%", maxWidth: 400 }}
                multiline
                maxRows={4}
                key={user.id}
                id={user.id}
                label="Email"
                value={user.email || ""}
                disabled
              />
            </Box>
          </Grid>
        </Grid>
      </div>
      <ButtonBox isdesbutton={isDisabled.toString()}>
        <ButtonSave disabled={isDisabled} onClick={handleSave}>
          Save changes
        </ButtonSave>
      </ButtonBox>
    </InfoWrapper>)} 
    </>
  );
};

export default PersonalAccountUserProfile;
