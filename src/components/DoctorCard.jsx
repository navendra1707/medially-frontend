import { useTheme } from "@emotion/react";
import { Avatar, Button, Card, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import doctor from "../assets/doctor.png";
import SubHeading from "../styled/SubHeading";
import LightText from "../styled/LightText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Btn from "../styled/Btn";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ name, specialization, _id }) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const alt = palette.background.alt;
  const neutralDark = palette.neutral.dark;
  const neutralMedium = palette.neutral.medium;
  const defaultBack = palette.background.default;
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");

  return (
    <Card
      sx={{
        backgroundColor: alt,
        p: 2,
        width: isMobileScreen ? "90vw" : "50vw",
        borderRadius: '0.5rem'
      }}
      elevation={2}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={"row"}
          gap={2}
        >
          <Avatar src={doctor} alt="doctor" />
          <Stack>
            <SubHeading style={{ color: neutralDark }}>
              {name.length > 15 ? `${name.slice(0, 15)}...` : name}
            </SubHeading>
            <LightText style={{ color: neutralMedium }}>
              {specialization}
            </LightText>
          </Stack>
        </Stack>

        <Stack
            alignItems={'flex-end'}
        >
          <Button
            onClick={() => {navigate(`/doctor/${_id}/book-appointment`)}}
          >
            <KeyboardArrowRightIcon sx={{ color: neutralDark }} />
          </Button>
          <Button
            sx={{
                textTransform: 'none',
                backgroundColor: defaultBack,
                p: '0.2rem 0.5rem',
                border: `1px solid ${neutralDark}`,
                fontWeight: 550,
                color: neutralDark
            }}
            onClick={() => {navigate(`/doctor/${_id}`)}}
          >
            View Profile
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DoctorCard;
