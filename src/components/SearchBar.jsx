import React from "react";
import FlexBetween from "../styled/FlexBetween";
import { IconButton, InputBase, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const SearchBar = ({ searchValue, setSearchValue, placeholder }) => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const neutralLight = palette.neutral.light;

  return <FlexBetween
    backgroundColor={neutralLight}
    borderRadius="9px"
    gap="3rem"
    padding="0.1rem 1rem"
  >
    <InputBase
      placeholder={placeholder}
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      sx={{
        width: isMobileScreen ? "60vw" : "30vw",
      }}
    />
    <IconButton>
      <Search />
    </IconButton>
  </FlexBetween>;
};

export default SearchBar;