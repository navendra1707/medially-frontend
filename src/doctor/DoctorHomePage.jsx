import React, { useEffect, useState } from "react";
import PageLayout from "../styled/PageLayout";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { GET_APPOINTMENT } from "../endPoints";
import { Stack, useMediaQuery } from "@mui/material";
import SubHeading from "../styled/SubHeading";
import { useTheme } from "@emotion/react";
import { toast } from "react-toastify";
import Loader from "../styled/Loader";
import FormInput from "../styled/FormInput";
import BookingCard from "./BookingCard";
import Heading from "../styled/Heading";

const DoctorHomePage = () => {
  const user = useSelector((state) => state.user);
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const alt = palette.background.alt;
  const dark = palette.neutral.dark;
  const main = palette.primary.main;

  const [date, setDate] = useState(dayjs(new Date()).format("YYYY-MM-DD"));
  const [appointment, setAppointment] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tokenNumber, setTokenNumber] = useState(0);

  console.log(appointment);

  const inputProps = {
    style: {
      width: isMobileScreen ? "80vw" : "20vw",
      color: dark,
      fontWeight: 550,
      fontSize: "1.2rem",
    },
  };
  const inputSx = {
    backgroundColor: alt,
  };

  const fetchAppointment = async () => {
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${GET_APPOINTMENT}`,
      {
        method: "POST",
        body: JSON.stringify({
          doctorId: user._id,
          date: date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      toast.error(data.message);
      setAppointment(data.appointment);
      setTokenNumber(null);
      return;
    }
    setAppointment(data.appointment);
    setTokenNumber(data.appointment.currentNumber);
    setBookings(data.bookings);
  };

  useEffect(() => {
    fetchAppointment();
  }, [date]);

  return (
    <PageLayout title={"Your Bookings"} minHeight={"60vh"} loading={loading}>
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={1}
        mb={2}
      >
        <SubHeading
          style={{ color: main }}
        >{`Current Token Number: ${tokenNumber ? tokenNumber : 'NA'}`}</SubHeading>
        <FormInput
          id="date"
          label="Choose Date"
          inputProps={{
            style: {
              ...inputProps.style,
              color: date ? dark : alt,
            },
            min: new Date().toISOString().slice(0, 10),
          }}
          type="date"
          required
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          style={inputSx}
          inputColor
        />
      </Stack>
      {appointment ? (
        <Stack gap={1} alignItems={"center"} justifyContent={"center"}>
          {bookings.map((booking) => {
            return (
              <BookingCard
                bookingData={booking}
                setTokenNumber={setTokenNumber}
              />
            );
          })}
        </Stack>
      ) : (
        <SubHeading>No Appointments for {dayjs(date).format('MMM DD, YYYY')}.</SubHeading>
      )}
    </PageLayout>
  );
};

export default DoctorHomePage;
