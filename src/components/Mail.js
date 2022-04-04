import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Mail = () => {
    return (
    <Box bgcolor={ "rgb(22, 22, 22)" } display={"flex"}  justifyContent={"center"} paddingTop={"150px"} paddingBottom={"5%"} sx={{height: "33%"}} >
        <TextField sx={{bgcolor:'white', width:'80%'}} id="outlined-basic" label="email" variant="outlined" />
        <Button variant="contained" color="error">Trimite</Button>
    </Box>
    );
};

export default Mail;
