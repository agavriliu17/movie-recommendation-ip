import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';

const Info = () => {
    return (
    <Box sx={{
      width: 1,
      height: "33%",
      backgroundColor: "#212121",
      display: "flex",
      backgroundSize: "cover"
    }}>
      <Stack sx={{display: "flex", alignItems: "row", marginTop:"5%", marginRight: "2%", marginLeft: "2%"}} >
      <Typography variant="h2" component="div" gutterBottom color="common.white">
        Movie management
      </Typography>
      <Typography variant="h4" component="div" gutterBottom color="common.white">
        The new place to find all your favourite movies.
      </Typography>
      </Stack>
     
      <CardMedia
        component="img"
        height="83%"
        
        image="https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg"
        alt="image"
        sx={{marginTop : "3%",
            marginBottom: "3%",
            marginRight: "2%",
            maxWidth: 500, 
            display:"flex",
          }}
      />
      </Box  >
     
  
     
    );
  
};

export default Info;
