import { Box, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import FormInput from "../styled/FormInput";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Btn from "../styled/Btn";

const LoginForm = () => {
    const isMobileScreen = useMediaQuery("(max-width: 1000px)");

    const inputProps = {
        style: {
            width: isMobileScreen ? "80vw" : '30vw',
            color: '#fff',
            fontWeight: 550,
            fontSize: '1.2rem'
        }
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return <Box
        p={1}
        sx={{
            backgroundColor: '#030216'
        }}
    >
        <Stack
            gap={3}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <FormInput
                id="email"
                label="Email ID"
                inputProps={inputProps}
                type="email"
            />
            <Stack
                gap={1}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                    backgroundColor: '#333333',
                    borderRadius: '0.5rem',
                    minWidth: isMobileScreen ? "82vw" : "30vw"
                }}
            >
                <FormInput
                    id="password"
                    label="Password"
                    inputProps={{
                        style: {
                            ...inputProps.style,
                            width: isMobileScreen ? '67vw' : '27vw'
                        }
                    }}
                    type={showPassword ? "text" : "password"}
                />
                <IconButton
                    onClick={handleClickShowPassword}
                >
                    {showPassword ? <VisibilityOff sx={{color:"#fff"}} /> : <Visibility sx={{color:"#fff"}} />}
                </IconButton>
            </Stack>
            <Btn
                sx={{
                    width: isMobileScreen ? "50vw" : "20vw",
                }}
            >
                Login
            </Btn>
        </Stack>
    </Box>
}

export default LoginForm;