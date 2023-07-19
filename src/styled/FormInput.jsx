import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const FormInput = styled(TextField)({
    "& .MuiFormLabel-root": {
        color: '#fff',
        fontWeight: 500,
        fontSize: '1.1rem'
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: '#fff',
        fontWeight: 500,
        fontSize: '1.1rem'
    },
    backgroundColor: '#333333',
    borderRadius: '0.5rem'
})

export default FormInput;