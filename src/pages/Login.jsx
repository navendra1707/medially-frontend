import React from "react";
import launchLogo from "../assets/Long_logo.png";
import { Box } from "@mui/system";
import {
  Card,
  Stack,
  Tabs,
  Tab,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LoginForm from "../components/LoginForm";
import { useLocation, useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");

  const value = location.pathname === "/login" ? 0 : 1;

  const handleChange = (event, newValue) => {
    if (newValue === 1) {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const tabStyle = {
    color: "#fff",
    fontWeight: 550,
    fontSize: "1.2rem",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Card
        elevation={2}
        style={{
          width: {
            xs: "80vw",
            md: "50vw",
          },
          backgroundColor: "#030216",
        }}
      >
        <Stack gap={1} justifyContent={"center"} alignItems={"center"}>
          <img
            src={launchLogo}
            alt="logo"
            style={{
              height: isMobileScreen ? "10vh" : "15vh",
            }}
          />
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Login" style={tabStyle} />
            <Tab label="Register" style={tabStyle} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <LoginForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RegisterForm />
          </TabPanel>
        </Stack>
      </Card>
    </Box>
  );
};

export default Login;
