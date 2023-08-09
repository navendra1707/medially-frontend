import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const { palette } = useTheme();
  const [params] = useSearchParams();
  const defaultBack = palette.background.default;

  const [searchValue, setSearchValue] = useState('');
  const symptom = params.get('symptom') || '';

  console.log(symptom);

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
                placeholder={'Search Doctors...'} 
            />
          </form>
        </Stack>
      </Box>
    </div>
  );
};

export default SearchPage;
