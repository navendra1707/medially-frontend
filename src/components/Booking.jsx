import { useTheme } from "@emotion/react";
import { Card, useMediaQuery } from "@mui/material";
import React from "react";
import FlexBetween from "../styled/FlexBetween";
import Heading from "../styled/Heading";
import SubHeading from "../styled/SubHeading";
import dayjs from "dayjs";
import Status from "./Status";
import { useNavigate } from "react-router-dom";

const Booking = ({booking}) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const alt = palette.background.alt;
  const neutralDark = palette.neutral.dark;
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");

  return (
    <Card
      sx={{
        backgroundColor: alt,
        p: 2,
        width: isMobileScreen ? "90vw" : "50vw",
        borderRadius: "0.5rem",
        cursor: 'pointer'
      }}
      elevation={5}
      onClick={() => {
        navigate(`/live-appointment-update/${booking._id}`)
      }}
    >
      <FlexBetween
        justifyContent={'space-between'}
      >
        <SubHeading color={neutralDark}>{booking.doctorName}</SubHeading>
        <SubHeading color={neutralDark}>{dayjs(booking.date).format('MMM DD, YYYY')}</SubHeading>
      </FlexBetween>

      <FlexBetween
        justifyContent={'space-between'}
      >
        <SubHeading color={neutralDark}>{booking.patientName}</SubHeading>
        <Status status={booking.status} />
      </FlexBetween>
    </Card>
  );
};

export default Booking;
