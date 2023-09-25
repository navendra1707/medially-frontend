import React, { useEffect, useState } from "react";
import PageLayout from "../styled/PageLayout";
import { useParams } from "react-router-dom";
import { GET_UPDATE } from "../endPoints";
import { toast } from "react-toastify";
import FlexBetween from "../styled/FlexBetween";
import Heading from "../styled/Heading";
import { useTheme } from "@emotion/react";
import SubHeading from "../styled/SubHeading";
import { Stack } from "@mui/material";
import Status from "../components/Status";
import dayjs from "dayjs";

const LiveUpdate = () => {
  const { id } = useParams();
  const { palette } = useTheme();

  const main = palette.primary.main;
  const neutralDark = palette.neutral.dark;
  const dark = palette.neutral.dark;

  const [currentNumber, setCurrentNumber] = useState(null);
  const [number, setNumber] = useState(null);
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUpdate = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${GET_UPDATE}?bookingId=${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();

    setLoading(false);
    if (!res.ok) {
      toast.error(data.message);
      return;
    }
    setCurrentNumber(data.currentNumber);
    setNumber(data.number);
    setBooking(data.booking);
  };

  useEffect(() => {
    fetchUpdate();
  }, []);

  if(!loading && !booking){
    return <Heading sx={{color: dark}}>
        No Booking Found
    </Heading>
  }

  return (
    <PageLayout title={"Live Appointment Update"} loading={loading}>
      <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
        <FlexBetween alignItems={"center"} justifyContent={"center"}>
          <Heading sx={{ color: main }}>
            Please refresh the page to know latest update.
          </Heading>
        </FlexBetween>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"center"}
          gap={2}
          flexWrap={'wrap'}
        >
          <Heading style={{ color: dark }}>
            {`Current Token Number: ${currentNumber}`}
          </Heading>
          <Heading style={{ color: dark }}>
            {`Your Token Number: ${number}`}
          </Heading>
        </Stack>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          gap={2}
          flexWrap={'wrap'}
        >
          <Heading color={main}>
            {`Doctor: ${booking ? booking.doctorName : ""}`}
          </Heading>
          <Heading color={neutralDark}>
            {dayjs(booking ? booking.date : "").format("MMM DD, YYYY")}
          </Heading>
        </Stack>

        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          gap={2}
          flexWrap={'wrap'}
        >
          <Heading color={main}>
            {`Patient: ${booking ? booking.patientName : ""}`}
          </Heading>
          <Status status={booking ? booking.status : ""} />
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default LiveUpdate;
