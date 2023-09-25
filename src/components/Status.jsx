import { Card } from "@mui/material";
import React from "react";
import { STATUS } from "../utils/Enum";
import SubHeading from "../styled/SubHeading";

const Status = ({ status }) => {
  let color = "purple";
  switch (status) {
    case STATUS.PENDING.text:
      color = STATUS.PENDING.color;
      break;
    case STATUS.COMPLETED.text:
      color = STATUS.COMPLETED.color;
      break;
    case STATUS.CANCELLED.text:
      color = STATUS.CANCELLED.color;
      break;
    case STATUS.BOOKED.text:
      color = STATUS.BOOKED.color;
      break;
    default:
      color = "purple";
  }

  return (
    <Card
      sx={{
        borderRadius: "1rem",
        backgroundColor: color,
        padding: '0.5rem 1rem'
      }}
    >
      <SubHeading color={"#fff"}>{status}</SubHeading>
    </Card>
  );
};

export default Status;
