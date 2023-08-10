import { useTheme } from "@emotion/react";
import React from "react";
import FlexBetween from "./FlexBetween";
import { CircularProgress } from "@mui/material";

const Loader = () => {
    const {palette} = useTheme();
    const defaultBack = palette.background.default;

    return <FlexBetween
        sx={{
            height: '60vh',
            background: defaultBack,
            justifyContent: 'center'
        }}
    >
        <CircularProgress color = {'secondary'} />
    </FlexBetween>
}

export default Loader;