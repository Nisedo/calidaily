import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';

function App() {
    return  (
    <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignContent: "center"}}>
      <Card sx={{ width: 400, maxHeight: "80vh" }}>
          <Box as="form" sx={{height: "100%", display: "flex", flexDirection: "column"
            ,justifyContent: "space-around", alignContent: "center", paddingX: "50px"}}>
            <TextField defaultValue={0} type="number" color="primary" name="push-up" label="push-up"/>
            <TextField defaultValue={0} type="number" color="primary" name="pull-up" label="pull-up"/>
            <TextField defaultValue={0} type="number" color="primary" name="squat" label="squat"/>
            <Button type="submit" variant="contained">Enregistre tes perfs</Button>
        </Box>
      </Card>
    </Box>
    )
}

export default App;
