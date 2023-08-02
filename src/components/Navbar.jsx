import React, { useState } from "react";
import { Button, Card, useMediaQuery } from "@mui/material";
import logo from "../assets/Long_logo.png";
import { useTheme } from "@emotion/react";
import FlexBetween from "../styled/FlexBetween";
import ProfileButton from "./ProfileButton";
import NavCard from "./NavCard";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Navbar = () => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const background = palette.background.alt;
  const dark = palette.neutral.dark;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minHeight: "10vh",
        backgroundColor: background,
        p: 2,
      }}
      elevation={2}
    >
      {open && <NavCard setOpen={setOpen} />}
      <FlexBetween justifyContent={"space-between"}>
        <FlexBetween>
          <Button onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon
              sx={{
                color: dark,
                fontSize: '2rem'
              }}
            />
          </Button>
          <img
            alt="logo"
            src={logo}
            style={{ width: isMobileScreen ? "10rem" : "13rem" }}
            onClick={() => navigate("/")}
          />
        </FlexBetween>
        <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
          <ProfileButton />
        </div>
      </FlexBetween>
    </Card>
  );
};

export default Navbar;
