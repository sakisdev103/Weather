import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Widget = () => {
  return (
    <Grid container sx={{ mt: 3, p: 3, bgcolor: "#03a9f4", borderRadius: 1 }}>
      <Grid item xs={8}>
        <Typography variant="h6">Location</Typography>
        <Typography>Temp</Typography>
        <Typography>min / max Feels like temp</Typography>
      </Grid>
      <Grid item xs={4}>
        Weather icon
      </Grid>
    </Grid>
  );
};

export default Widget;
