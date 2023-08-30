import { useTheme } from "@emotion/react";
import { Box, Card, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Loader from "./Loader";

const PageLayout = ({ children, minHeight, loading, width }) => {
  const { palette } = useTheme();
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const defaultBack = palette.background.default;
  const alt = palette.background.alt;

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
          }}
        >
          <Card
            sx={{
              width: isMobileScreen ? "90vw" : (width || '60vw'),
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
