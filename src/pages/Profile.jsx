import { Box, Card, Divider, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import { useTheme } from "@emotion/react";
import FlexBetween from "../styled/FlexBetween";
import ProfileButton from "../components/ProfileButton";
import Btn from "../styled/Btn";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../styled/Heading";
import SubHeading from "../styled/SubHeading";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { setMode } from "../state";

const Profile = () => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const dispatch = useDispatch();
  const { user, mode } = useSelector((state) => state);

  const defaultBack = palette.background.default;
  const alt = palette.background.alt;
  const main = palette.primary.main;

  const neutralMain = palette.neutral.main;

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          backgroundColor: defaultBack,
          display: "flex",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Card
          elevation={3}
          sx={{
            backgroundColor: alt,
            color: "inherit",
            borderRadius: "1rem",
            width: isMobileScreen ? "90vw" : "50vw",
            height: "60vh",
            p: 3,
          }}
        >
          <Stack gap={1.5}>
            <FlexBetween justifyContent={"space-between"}>
              <ProfileButton width={"4rem"} />
              <Btn
                endIcon={<ModeEditIcon />}
                style={{
                  borderRadius: "0.5rem",
                }}
              >
                edit
              </Btn>
            </FlexBetween>
            <Divider />
            <FlexBetween justifyContent={'space-between'} flexWrap={'wrap'}>
                <div>
                    <Heading color={neutralMain}>{user?.fullName}</Heading>
                    <SubHeading color={main}>{user?.email}</SubHeading>
                </div>
                <SubHeading color={neutralMain}>{`User ID: ${user?.userId}`}</SubHeading>
            </FlexBetween>
            <FlexBetween justifyContent="space-between">
              <SubHeading
                color={neutralMain}
                style={{ fontSize: "1.2rem" }}
              >{`Switch to ${
                mode === "dark" ? "Light" : "Dark"
              } Mode`}</SubHeading>
              <Btn onClick={() => dispatch(setMode())}>
                {mode === "dark" ? <LightModeIcon color={neutralMain} /> : <NightsStayIcon color={neutralMain} />}
              </Btn>
            </FlexBetween>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;
