import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Btn = styled(Button)({
  backgroundColor: "#A076F9",
  borderRadius: "1.5rem",
  padding: "0.5rem 2rem",
  textTransform: "none",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.2rem",
  ':hover': {
    backgroundColor: '#6528F7'
  }
});

export default Btn;