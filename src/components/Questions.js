import React from "react";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions = () => {
    return <>
    <Box bgcolor={ "rgb(22, 22, 22)" } >
    <div style={{color:'white', display:'flex', justifyContent:'center', paddingTop:'200px', paddingBottom:'25px'}}>
            <h1>Intrebari frecvente</h1>
    </div>
    <div>
      <Accordion sx={{bgcolor:'gray'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>Ce este Movie Management?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            raspuns
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Box>
  </>;
};

export default Questions;
