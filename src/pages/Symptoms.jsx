import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, IconButton, InputBase, Stack, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";
import FlexBetween from "../styled/FlexBetween";
import { useTheme } from "@emotion/react";

const Symptoms = () => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery('(max-width: 1000px)');
  const neutralLight = palette.neutral.light;
  const defaultBack = palette.background.default;

  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: defaultBack
        }}
      >
        <Stack gap={2} alignItems={"center"}>
          <form
            onSubmit={() => {
            //   if (searchValue) {
            //     navigate(`/search/${searchValue}`);
            //   }
            }}
          >
            <FlexBetween
              backgroundColor={neutralLight}
              borderRadius="9px"
              gap="3rem"
              padding="0.1rem 1rem"
            >
              <InputBase
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                sx={{
                    width: isMobileScreen ? '60vw' : '30vw'
                }}
              />
              <IconButton type="submit">
                <Search />
              </IconButton>
            </FlexBetween>
          </form>
        </Stack>
      </Box>
    </div>
  );
};

export default Symptoms;
