import { useTheme } from "@emotion/react";
import { Box, Card, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Loader from "./Loader";
import Heading from "./Heading";

const PageLayout = ({ children, minHeight, loading, width, title }) => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const defaultBack = palette.background.default;
  const alt = palette.background.alt;
  const neutralDark = palette.neutral.dark;

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
            backgroundColor: defaultBack,
            flexDirection: 'column'
          }}
        >
          {title && <Heading sx={{color: neutralDark}}>
              {title}
            </Heading>}
          <Card
            sx={{
              width: isMobileScreen ? "95vw" : (width || '60vw'),
              backgroundColor: alt,
              borderRadius: "0.5rem",
              margin: "2rem auto",
              minHeight: minHeight || "50vh",
              p: 3,
            }}
            elevation={3}
          >
            {children}
          </Card>
        </Box>
      )}
    </div>
  );
};

export default PageLayout;
