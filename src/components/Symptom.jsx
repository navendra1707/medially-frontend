import React, { useEffect, useState } from "react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import data from "../static";
import SearchCard from "./SearchCard";
import { CATEGORY } from "../utils/Enum";

const Symptom = ({ searchTerm, searchType }) => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const { palette } = useTheme();
  const defaultBack = palette.background.default;

  const [symptoms, setSymptoms] = useState(searchType === CATEGORY.SYMPTOM ? data?.symptoms : data?.specializations);

  useEffect(() => {
    const filterSymptoms = () => {
      const filteredResults = symptoms.filter((symptom) =>
        symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSymptoms(filteredResults);
    };

    filterSymptoms();
  }, [searchTerm]);

  return (
    <Box
      sx={{
        height: "60vh",
        margin: "1rem auto",
        width: isMobileScreen ? "90vw" : "50vw",
        borderRadius: "1rem",
        backgroundColor: defaultBack,
        overflowY: "scroll",
      }}
      elevation={2}
    >
      <Stack alignItems={"center"} justifyContent={"center"} gap={1}>
        {symptoms.map((symptom) => {
          return (
            <SearchCard
              image={symptom.image}
              name={symptom.name}
              searchType={searchType}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Symptom;
