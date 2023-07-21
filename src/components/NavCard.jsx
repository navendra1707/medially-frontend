import { useTheme } from "@emotion/react";
import { Card, Divider, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import FlexBetween from "../styled/FlexBetween";
import ProfileButton from "./ProfileButton";
import Btn from "../styled/Btn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { setLogout } from "../state";
import { useNavigate } from "react-router-dom";

const NavCard = ({ setOpen }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");

  const alt = palette.background.alt;
  const main = palette.primary.main;

  return (
    <Card
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 3,
        backgroundColor: alt,
        borderRadius: "1rem",
        p: 3,
        width: isMobileScreen ? "60vw" : "20vw",
        border: `2px solid ${main}`
      }}
      elevation={2}
    >
      <Stack gap={2}>
        <FlexBetween
          flexDirection={"row-reverse"}
          onClick={() => setOpen(false)}
          sx={{ cursor: "pointer" }}
        >
          <ProfileButton />
        </FlexBetween>
        <Divider />
        <Btn
          endIcon={<KeyboardArrowRightIcon />}
          style={{
            borderRadius: "0.5rem",
            backgroundColor: main,
          }}
          onClick={() => navigate('/profile')}
        >
          Profile
        </Btn>
        <Btn
          endIcon={<LogoutIcon />}
          style={{
            borderRadius: "0.5rem",
            backgroundColor: main,
          }}
          onClick={() => {
            dispatch(setLogout());
            navigate('/login');
          }}
        >
          Logout
        </Btn>
      </Stack>
    </Card>
  );
};

export default NavCard;
