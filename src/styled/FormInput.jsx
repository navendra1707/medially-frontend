import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const FormInput = styled(TextField)(({inputColor}) => ({
    "& .MuiFormLabel-root": {
        color: inputColor ? inputColor : '#000',
        fontWeight: 500,
        fontSize: '1.1rem'
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: inputColor ? inputColor : '#000',
        fontWeight: 500,
        fontSize: '1.1rem'
    },
    backgroundColor: inputColor ? inputColor : '#fff',
    borderRadius: '0.5rem'
}))

export default FormInput;