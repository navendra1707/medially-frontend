import React, { useEffect, useState } from "react";
import FlexBetween from "../styled/FlexBetween";
import { CircularProgress, Stack, useMediaQuery } from "@mui/material";
import Heading from "../styled/Heading";
import { useTheme } from "@emotion/react";
import SubHeading from "../styled/SubHeading";
import { useSelector } from "react-redux";
import { GET_INDIVIDUAL_DOCTOR, BOOK_APPOINTMENT } from "../endPoints";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../styled/FormInput";
import Btn from "../styled/Btn";
import { toast } from "react-toastify";
import PageLayout from "../styled/PageLayout";

const BookDoctor = () => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
  });

  const alt = palette.background.alt;
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.primary.main;

  const inputProps = {
    style: {
      width: isMobileScreen ? "80vw" : "35vw",
      color: dark,
      fontWeight: 550,
      fontSize: "1.2rem",
    },
  };
  const inputSx = {
    backgroundColor: alt,
  };

  useEffect(() => {
    const fetchDoctor = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${GET_INDIVIDUAL_DOCTOR.replace(
          "id",
          id
        )}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setDoctor(data?.doctor);
      setLoading(false);
    };

    fetchDoctor();
  }, []);

  const bookAppointment = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    if (!doctor) {
      toast.error("Some Error occured, try again later.");
    }
    const formBody = {
      patientId: user.userId,
      patientName: formData.patientName,
      date: formData.date,
      doctorId: doctor._id,
    };

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${BOOK_APPOINTMENT}`,
      {
        method: "POST",
        body: JSON.stringify(formBody),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      toast.error(response.message);
    } else {
      toast.success(data.message);
      navigate("/");
    }
    setBtnLoading(false);
  };

  return (
    <PageLayout minHeight={"75vh"} width={"40vw"} loading={loading}>
      <Stack gap={2} alignItems={"center"}>
        <Stack gap={2}>
          <Heading style={{ color: dark }}>Book Appointment</Heading>
          <SubHeading style={{ color: medium, fontWeight: 500 }}>
            Fill out the information below in order to book your appointment
            with our office.
          </SubHeading>
          <SubHeading style={{ color: medium, fontWeight: 500 }}>
            Emails will be sent to:
          </SubHeading>
          <SubHeading style={{ color: main }}>
            {user ? user.email : "NA"}
          </SubHeading>
          <SubHeading style={{ color: dark }}>
            {doctor ? doctor.fullName : ""}
          </SubHeading>
          <SubHeading style={{ color: dark }}>
            {doctor ? doctor.hospital[0] : ""}
          </SubHeading>
          <form onSubmit={bookAppointment}>
            <Stack gap={2}>
              <FormInput
                id="patientName"
                label="Pateint Name"
                inputProps={inputProps}
                type="text"
                required
                value={formData.patientName}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    patientName: e.target.value,
                  }));
                }}
                style={inputSx}
                inputColor
              />
              <FormInput
                id="date"
                label="Choose Date"
                inputProps={{
                  style: {
                    ...inputProps.style,
                    color: formData.date ? dark : alt,
                  },
                  min: new Date().toISOString().slice(0, 10),
                }}
                type="date"
                required
                value={formData.date}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }));
                }}
                style={inputSx}
                inputColor
              />
              <FlexBetween justifyContent={"space-evenly"}>
                <Btn onClick={() => navigate(-1)}>Cancel</Btn>
                <Btn type="submit" disabled={btnLoading}>
                  {btnLoading ? (
                    <CircularProgress color={"secondary"} />
                  ) : (
                    "Book Now"
                  )}
                </Btn>
              </FlexBetween>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default BookDoctor;
