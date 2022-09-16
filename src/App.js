import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Typography } from '@mui/material';
import x from "./x.png"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 function App() {
 
  return (
    <Stack spacing={0} sx={{ width: '90%' }} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} margin={5} >
    
     <Alert severity="warning" color={"info"} >
        <Typography>Info Message</Typography>
        <Typography>Some message</Typography>
        <img src={x} alt="" />
        </Alert>
      <Alert severity="warning" color={"success"}>
        <Typography>Succes Message</Typography>
        <Typography>Some message</Typography>
        <img src={x} alt="" />
        </Alert>
      <Alert severity="warning" color={"warning"}>
        <Typography>Warning Message</Typography>
      <Typography>Some message</Typography>
      <img src={x} alt="" />
      </Alert>
      <Alert severity="warning" color={"error"}>
        <Typography>Error Message</Typography>
      <Typography>Some message</Typography>
      <img src={x} alt="" />
      </Alert>
    </Stack>
  );
}

export default App
