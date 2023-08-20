import { useTheme } from "@emotion/react";
import { Avatar, Button, Card, Stack } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FlexBetween from "../styled/FlexBetween";
import SubHeading from "../styled/SubHeading";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ name, image, searchType }) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const alt = palette.background.alt;
  const neutralDark = palette.neutral.dark;

  return (
    <Card
      sx={{
        backgroundColor: alt,
        width: "100%",
        height: "10vh",
        borderRadius: "0.8rem",
        p: 2,
        cursor: 'pointer'
      }}

      onClick={() => {
        navigate(`/search?${searchType}=${name}&page=1`);
      }}
    >
      <FlexBetween justifyContent={"space-between"}>
        <Stack alignItems={'center'} direction={'row'} justifyContent={'center'} gap={2}>
          <Avatar src={image ? image : ''} sx = {{visibility: image ? 'visible' : 'hidden'}} alt="symptom" />
          <SubHeading style={{ color: neutralDark }}>{name}</SubHeading>
        </Stack>
        <Button>
            <KeyboardArrowRightIcon sx={{color: neutralDark}} />
        </Button>
      </FlexBetween>
    </Card>
  );
};

export default SearchCard;
