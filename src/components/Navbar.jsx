import React, { useState } from "react";
import { Card, useMediaQuery } from "@mui/material";
import logo from "../assets/Long_logo.png";
import { useTheme } from "@emotion/react";
import FlexBetween from "../styled/FlexBetween";
import ProfileButton from "./ProfileButton";
import NavCard from "./NavCard";

const Navbar = () => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const background = palette.background.alt;

  return (
    <Card
      sx={{
        minHeight: "10vh",
        backgroundColor: background,
        p: 2,
      }}
      elevation={2}
    >
      {open && <NavCard setOpen = {setOpen} />}
      <FlexBetween justifyContent={"space-between"}>
        <img alt="logo" src={logo} style={{width: isMobileScreen ? '10rem' : '13rem'}} />
        <div
            onClick={() => setOpen(true)}
            style = {{cursor: 'pointer'}}
        >
            <ProfileButton />
        </div>
      </FlexBetween>
    </Card>
  );
};

export default Navbar;
