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
    <Stack spacing={0} sx={{ width: '90%' }} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} margin={5} gap={10}>
      <Alert severity="warning" color={"info"}  borderRadius={120}>
        <Typography>Info Message</Typography>
        <Typography>Some message</Typography>
        <img src='./x.png' alt="" />
        </Alert>
      <Alert severity="warning" color={"success"}>Succes Message</Alert>
      <Alert severity="warning" color={"warning"}>Warning Message</Alert>
      <Alert severity="warning" color={"error"}>Error Message</Alert>
    </Stack>
  );
}

export default App
