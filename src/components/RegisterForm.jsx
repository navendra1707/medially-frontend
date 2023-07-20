import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../styled/FormInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Btn from "../styled/Btn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import dayjs from "dayjs";
import { REGISTER_API } from "../endPoints";
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../state";

const RegisterForm = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    code: "",
    fullName: "",
    dob: String(new Date()),
    phone: "",
    gender: "",
  });

  const nextPage = (e) => {
    
    e.preventDefault();
    if (!formData.email || !formData.confirmPassword || !formData.password) {
      setError(
        "Plese fill in the Required fields (email, password, confirm password)"
      );
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password don't match.");
      return;
    } else {
      setError("");
    }
    setPage(1);
  };

  const register = async (e) => {
    setLoading(true);
    e.preventDefault();
    const gender = e.target.elements.gender.value;
    setFormData(prev => ({
      ...prev,
      gender: gender
    }));
    const currDate = dayjs(new Date());
    if(dayjs(formData.dob) > currDate){
      setError(`Date of Birth can't be after ${currDate.format("DD-MM-YYYY")}`);
      return;
    }else{
      setError("");
    }

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${REGISTER_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        gender: gender
      })
    });

    const data = await response.json();
    console.log(data);
    setLoading(false);
    if(!response.ok){
      toast.error(data?.message);
      return;
    }else{
      toast.success(data?.message);
      const {user, token} = data;
      dispatch(setLogin({user, token}));
      navigate("/");
    }
  }

  const inputProps = {
    style: {
      width: isMobileScreen ? "80vw" : "30vw",
      color: "#fff",
      fontWeight: 550,
      fontSize: "1.2rem"
    },
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickConfirmShowPassword = () =>
    setConfirmShowPassword((show) => !show);

  const pageOne = (
    <>
      <FormInput
        id="email"
        label="Email Address"
        inputProps={inputProps}
        type="email"
        required
        value={formData.email}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            email: e.target.value,
          }));
        }}
      />
      <Stack
        gap={1}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        style={{
          backgroundColor: "#333333",
          borderRadius: "0.5rem",
          minWidth: isMobileScreen ? "82vw" : "30vw",
        }}
      >
        <FormInput
          id="password"
          label="Password"
          inputProps={{
            style: {
              ...inputProps.style,
              width: isMobileScreen ? "67vw" : "27vw",
            },
          }}
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        <IconButton onClick={handleClickShowPassword}>
          {showPassword ? (
            <VisibilityOff sx={{ color: "#fff" }} />
          ) : (
            <Visibility sx={{ color: "#fff" }} />
          )}
        </IconButton>
      </Stack>
      <Stack
        gap={1}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        style={{
          backgroundColor: "#333333",
          borderRadius: "0.5rem",
          minWidth: isMobileScreen ? "82vw" : "30vw",
        }}
      >
        <FormInput
          id="confirm"
          label="Confirm Password"
          inputProps={{
            style: {
              ...inputProps.style,
              width: isMobileScreen ? "67vw" : "27vw",
            },
          }}
          type={confirmShowPassword ? "text" : "password"}
          required
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }));
          }}
        />
        <IconButton onClick={handleClickConfirmShowPassword}>
          {confirmShowPassword ? (
            <VisibilityOff sx={{ color: "#fff" }} />
          ) : (
            <Visibility sx={{ color: "#fff" }} />
          )}
        </IconButton>
      </Stack>
      <FormInput
        id="code"
        label="Code (For Doctor Only)"
        inputProps={inputProps}
        type="number"
        value={formData.code}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            code: e.target.value,
          }));
        }}
      />
      <Btn
        sx={{
          minWidth: isMobileScreen ? "50vw" : "20vw",
        }}
        onClick={nextPage}
      >
        Create Account
      </Btn>
    </>
  );

  const pageTwo = (
    <>
      <FormInput
        id="fullName"
        label="Full Name"
        inputProps={inputProps}
        type="text"
        required
        value={formData.fullName}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            fullName: e.target.value,
          }));
        }}
      />
      <FormInput
        id="dob"
        label="Date Of Birth"
        inputProps={inputProps}
        type="date"
        required
        value={formData.dob}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            dob: e.target.value,
          }));
        }}
      />
      <FormInput
        id="phone"
        label="Phone Number"
        inputProps={inputProps}
        type="text"
        required
        value={formData.phone}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            phone: e.target.value,
          }));
        }}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        sx={{
          color: "#fff",
          fontSize: "1.2rem"
        }}
      >
        <FormInput type="radio" id="male" name="gender" value="male" required />
        <label for="male">Male</label>

        <FormInput type="radio" id="female" name="gender" value="female" required />
        <label for="female">Female</label>

        <FormInput type="radio" id="other" name="gender" value="other" required />
        <label for="other">Other</label>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Btn
          startIcon={<ArrowBackIcon />}
          sx={{
            width: isMobileScreen ? "40vw" : "10vw",
          }}
          onClick={() => {
            setPage(0);
          }}
        >
          Back
        </Btn>
        <Btn
          sx={{
            width: isMobileScreen ? "40vw" : "10vw",
          }}
          type="submit"
          disabled = {loading}
        >
          {loading ? <CircularProgress color = "secondary" /> : "Register"}
        </Btn>
      </Stack>
    </>
  );

  return (
    <Box
      p={1}
      sx={{
        backgroundColor: "#030216",
      }}
    >
      <form
        onSubmit = {register}
      >
        <Stack gap={3} justifyContent={"center"} alignItems={"center"}>
          {page === 0 && pageOne}
          {page === 1 && pageTwo}
        </Stack>
      </form>
      (error &&{" "}
      <Typography
        style={{
          color: "red",
          fontWeight: 500,
          fontSize: "1rem",
        }}
      >
        {error}
      </Typography>
      )
    </Box>
  );
};

export default RegisterForm;
