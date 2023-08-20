import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import data from "../static/index";
import { FIND_BY_SYMPTOM } from "../endPoints";
import DoctorCard from "../components/DoctorCard";
import Pagination from "@mui/material/Pagination";
import { handleUpdateClick } from "../utils/url";
import Loader from "../styled/Loader";

const SearchPage = () => {
  const { palette } = useTheme();
  const [params] = useSearchParams();
  const defaultBack = palette.background.default;

  const [searchValue, setSearchValue] = useState("");
  const originalUrl = window.location.href;
  const [doctors, setDoctors] = useState([]);
  const [totalDoctors, setTotalDoctors] = useState(10);
  const symptom = (params.get("symptom") || "").toLowerCase() || '';
  const specialization = (params.get("specialization") || "").toLowerCase() || '';
  const [page, setPage] = useState(+params.get("page") || 1);
  const [loading, setLoading] = useState(false);

  const specializations = symptom ? data.symptoms.find(
    (s) => s.name.toLowerCase() === symptom
  )?.specialization : [specialization] ;

  const fetchDoctors = async () => {
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${FIND_BY_SYMPTOM}?page=${page}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          specializations,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setDoctors(data?.doctors);
      setTotalDoctors(+data?.metaData?.totalDoctors);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDoctors();
  }, [page]);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: defaultBack,
        }}
      >
        <Stack
          gap={2}
          alignItems={"center"}
          sx={{
            width: "80vw",
          }}
        >
          <form>
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              placeholder={"Search Doctors..."}
            />
          </form>
          {loading ? (
            <Loader />
          ) : (
            <Stack alignItems={"center"} justifyContent={"center"} gap={1}>
              {doctors?.map((doctor) => {
                return (
                  <DoctorCard
                    name={doctor?.fullName}
                    specialization={doctor?.correctSpecialization}
                    _id={doctor?._id}
                  />
                );
              })}
            </Stack>
          )}
          <Pagination
            count={Math.ceil(totalDoctors / 10)}
            color="primary"
            onChange={(e, p) => {
              handleUpdateClick(originalUrl, "page", p);
              setPage(p);
            }}
            page={page}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default SearchPage;
