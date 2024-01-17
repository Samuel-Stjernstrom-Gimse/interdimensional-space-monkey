import React from 'react';
import {Box, Typography} from "@mui/material";
import Monkey from "./components/Monkey";
import './App.css'

const App = () => {
    return (
        <Box className={'all'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={'20px'}>
            <Typography borderRadius={'20px'} style={{ background:  'rgba(1,1,1,0.4)', padding: '10px' }} variant={"h2"}>Interdimensional Space Monkey</Typography>
            <Monkey/>
        </Box>
    );
};

export default App;
