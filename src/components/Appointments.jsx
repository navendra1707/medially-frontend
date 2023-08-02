import React from "react";
import SubHeading from "../styled/SubHeading";
import { useTheme } from "@emotion/react";

const Appointments = () => {
    const {palette} = useTheme();

    return <SubHeading
        style={{
            color: palette.neutral.main
        }}
    >
        No Upcoming Appointments!
    </SubHeading>
}

export default Appointments;