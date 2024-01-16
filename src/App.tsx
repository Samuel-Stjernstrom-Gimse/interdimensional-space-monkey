import React from 'react';
import {Box, Typography} from "@mui/material";
import Monkey from "./components/Monkey";

const App = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Typography variant={"h1"}>Big Monkey </Typography>
            <Monkey/>
        </Box>
    );
};

export default App;
