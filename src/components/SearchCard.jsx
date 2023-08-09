import { useTheme } from "@emotion/react";
import { Avatar, Button, Card, Stack } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FlexBetween from "../styled/FlexBetween";
import SubHeading from "../styled/SubHeading";

const SearchCard = ({ name, image }) => {
  const { palette } = useTheme();
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
      }}
    >
      <FlexBetween justifyContent={"space-between"}>
        <Stack alignItems={'center'} direction={'row'} justifyContent={'center'} gap={2}>
          <Avatar src={image ? image : ''} alt="symptom" />
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
