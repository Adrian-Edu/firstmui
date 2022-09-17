import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Typography } from '@mui/material';
import x from "./x.png"
import "./App.css"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 function App() {
 
  return (
    <Stack spacing={0} sx={{ width: '90%' }} display={"flex"} direction={"row"} justifyContent={"space-between"} margin={5} borderRadius={"12px"}>
      
     <Alert severity="warning" color={"info"} justify={"center"} sx={{borderRadius: "12px"}}>
      <Typography>  
      <p>Info Message</p>
      <p>Some message</p>
      </Typography>
       <img src={x} alt="" />
        </Alert>

        <Alert severity="warning" color={"success"} sx={{borderRadius: "12px"}}>
        <Typography><p>Succes Message</p><p>Some message</p></Typography>
        <img src={x} alt="" />
        </Alert>

        
      <Alert severity="warning" color={"warning"} sx={{borderRadius: "12px"}}>

        <Typography><p>Warning Message</p><p>Some message</p></Typography>
    
      <img src={x} alt="" />
      </Alert>

      <Alert severity="warning" color={"error"} sx={{borderRadius: "12px"}}>
        <Typography><p>Error Message</p><p>Some message</p></Typography>
      <img src={x} alt="" />
      </Alert>

    </Stack>
  );
}

export default App


/*
Note: 

Nu reusesc sa dau border radius de 12 px !!! Vad ce se prescrie border-radiusul !

*/