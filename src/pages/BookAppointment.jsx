import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, IconButton, InputBase, Stack, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";
import FlexBetween from "../styled/FlexBetween";
import { useTheme } from "@emotion/react";
import Symptom from "../components/Symptom";

const BookAppointment = () => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery('(max-width: 1000px)');
  const neutralLight = palette.neutral.light;
  const defaultBack = palette.background.default;
  const neutralDark = palette.neutral.dark;

  const [searchValue, setSearchValue] = useState('');

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const tabStyle = {
    color: neutralDark,
    fontWeight: 550,
    fontSize: "1.2rem",
  };

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
            width: '80vw'
          }}
        >
          <form
            onSubmit={() => {
              // if (searchValue) {
              //   navigate(`/search/${searchValue}`);
              // }
            }}
          >
            <FlexBetween
              backgroundColor={neutralLight}
              borderRadius="9px"
              gap="3rem"
              padding="0.1rem 1rem"
            >
              <InputBase
                placeholder="Search Symptom / ..."
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

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Symptom" style={tabStyle} />
            <Tab label="Specialization" style={tabStyle} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Symptom 
                searchTerm = {searchValue}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>2</div>
          </TabPanel>
        </Stack>
      </Box>
    </div>
  );
};

export default BookAppointment;
