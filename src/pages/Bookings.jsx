import React, { useEffect, useState } from "react";
import PageLayout from "../styled/PageLayout";
import { GET_USER_BOOKINGS } from "../endPoints";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { Stack } from "@mui/material";
import Booking from "../components/Booking";
import Heading from "../styled/Heading";
import { useTheme } from "@emotion/react";

const Bookings = () => {
  const { user } = useSelector((state) => state);
  const {palette} = useTheme();

  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));

  const fetchBookings = async () => {
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${GET_USER_BOOKINGS}?userId=${user.userId}&date=${date}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    setLoading(false);
    if(!response.ok){
        toast.error(date ? data.message : 'Some Error Occured');
        return;
    }

    setBookings(data ? data.bookings : []);
  };

  useEffect(() => {
    fetchBookings();
  }, [date])

  if(!loading && bookings.length === 0){
    return <PageLayout>
        <Heading color={palette.neutral.dark}>
            No Appointments Found.
        </Heading>
    </PageLayout>
  }

  return <PageLayout loading={loading} width={"55vw"} title={"Your Appointments"}>
    <Stack 
        gap={2}
        alignItems={'center'}
        justifyContent={'center'}
    >
        {
            bookings.map(booking => {
                return <Booking booking={booking} />
            })
        }
    </Stack>
  </PageLayout>;
};

export default Bookings;
