import { useTheme } from "@emotion/react";
import { Button, Card, CircularProgress, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "../styled/FlexBetween";
import SubHeading from "../styled/SubHeading";
import DoneIcon from "@mui/icons-material/Done";
import Status from "../components/Status";
import { STATUS } from "../utils/Enum";
import { MARK_COMPLETED } from "../endPoints";
import { toast } from "react-toastify";

const BookingCard = ({ bookingData, setTokenNumber }) => {
  const { palette } = useTheme();
  const alt = palette.background.alt;
  const neutralDark = palette.neutral.dark;
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");

  const [booking, setBooking] = useState(bookingData);
  const [loading, setLoading] = useState(false);

  const updateStatus = async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${MARK_COMPLETED}?bookingId=${booking._id}`,
        {
            method: 'GET'
        }
    );

    const data = await response.json();
    setLoading(false);
    if(!response.ok){
        toast.error(data.message);
        return;
    }
    setBooking(data.booking);
    setTokenNumber(data.appointment.currentNumber);
  }

  return (
    <Card
      sx={{
        backgroundColor: alt,
        p: 2,
        width: isMobileScreen ? "90vw" : "50vw",
        borderRadius: "0.5rem",
      }}
      elevation={3}
    >
      <FlexBetween justifyContent={"space-between"} mb={2}>
        <SubHeading color={neutralDark}>{booking.patientName}</SubHeading>
        <Status status={booking.status} />
      </FlexBetween>
      <FlexBetween alignItems={'center'} justifyContent={'space-between'}>
        <SubHeading sx={{color: neutralDark}}>
            {`Token Number: ${booking.number}`}
        </SubHeading>
        {booking.status !== STATUS.COMPLETED.text && <Button
          endIcon={<DoneIcon />}
          sx={{
            backgroundColor: "#3cb371",
            color: neutralDark,
            p: '0.5rem 1rem',
            fontWeight: 550,
            borderRadius: '0.5rem'
          }}
          disabled={loading}
          onClick={updateStatus}
        >
          {loading ? <CircularProgress /> : 'Done'}
        </Button>}
      </FlexBetween>
    </Card>
  );
};

export default BookingCard;
