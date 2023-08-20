import { useTheme } from "@emotion/react";
import React from "react";
import FlexBetween from "./FlexBetween";
import { CircularProgress, useMediaQuery } from "@mui/material";
import logo from "../assets/Long_logo.png";

const SuspenseLoader = () => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const defaultBack = palette.background.default;

  return (
    <FlexBetween
      sx={{
        height: "100vh",
        background: defaultBack,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FlexBetween
        sx={{
          height: "40vh",
          background: defaultBack,
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            height: isMobileScreen ? "10vh" : "15vh",
          }}
        />
        <CircularProgress color={"secondary"} />
      </FlexBetween>
    </FlexBetween>
  );
};

export default SuspenseLoader;
