import React from "react";
import { Avatar } from "@mui/material";
import profile from '../assets/profile.png';
import { useTheme } from "@emotion/react";

const ProfileButton = ({width}) => {
    const { palette } = useTheme();
    const main = palette.primary.main;

    return <Avatar src={profile} alt='profile' sx={{
        outline: `2px solid ${main}`,
        width: width,
        height: 'auto'
    }} />
}

export default ProfileButton;