import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GET_INDIVIDUAL_DOCTOR } from "../endPoints";
import Loader from "../styled/Loader";
import FlexBetween from "../styled/FlexBetween";
import { Card, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import doctor_img from "../assets/doctor.png";
import Heading from "../styled/Heading";
import SubHeading from "../styled/SubHeading";

const DoctorProfile = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);

  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const alt = palette.background.alt;
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

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

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <FlexBetween justifyContent={"center"}>
          <Card
            sx={{
              backgroundColor: alt,
              width: isMobileScreen ? "95vw" : "40vw",
              margin: "2rem auto",
              borderRadius: "1rem",
              minHeight: "70vh",
              p: 2,
            }}
          >
            <Stack gap={3} justifyContent={"center"} alignItems={"center"}>
              <img
                src={doctor_img}
                alt="doctor"
                style={{
                  width: isMobileScreen ? "10rem" : "15rem",
                  height: isMobileScreen ? "10rem" : "15rem",
                }}
              />
              <Stack gap={1}>
                <Heading style={{ color: dark }}>{doctor?.fullName}</Heading>
                <SubHeading style={{ color: medium }}>
                  {doctor?.correctSpecialization}
                </SubHeading>
                <SubHeading style={{ color: dark }}>Address</SubHeading>
                <SubHeading style={{ color: medium, fontWeight: 500 }}>
                  {doctor?.hospital[0]}
                </SubHeading>
                <SubHeading style={{ color: dark }}>Education</SubHeading>
                <SubHeading style={{ color: medium, fontWeight: 500 }}>
                  {doctor?.qualification}
                </SubHeading>
              </Stack>
            </Stack>
          </Card>
        </FlexBetween>
      )}
    </div>
  );
};

export default DoctorProfile;
