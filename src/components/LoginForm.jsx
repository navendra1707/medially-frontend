import { Box, Stack, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../styled/FormInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Btn from "../styled/Btn";
import { LOGIN_API } from "../endPoints";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../state";
import { CircularProgress } from "@mui/material";

const LoginForm = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputProps = {
    style: {
      width: isMobileScreen ? "80vw" : "30vw",
      color: "#fff",
      fontWeight: 550,
      fontSize: "1.2rem",
    },
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const login = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${LOGIN_API}`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      toast.error(data?.message);
      return;
    } else {
      toast.success(data?.message);
      dispatch(setLogin({ user: data?.user, token: data?.token }));
      navigate("/");
    }
  };

  return (
    <Box
      p={1}
      sx={{
        backgroundColor: "#030216",
      }}
    >
      <form onSubmit={login}>
        <Stack gap={3} justifyContent={"center"} alignItems={"center"}>
          <FormInput
            id="email"
            label="Email ID"
            inputProps={inputProps}
            type="email"
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
          <Btn
            sx={{
              width: isMobileScreen ? "50vw" : "20vw",
            }}
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress color="secondary" /> : "Login"}
          </Btn>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
