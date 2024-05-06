import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import humidity from "../icons/humidity.png";
import wind from "../icons/wind.png";

const SecondaryData = ({ data }) => {
  return (
    <Grid
      container
      align="center"
      justify="center"
      alignItems="center"
      sx={{ mt: 2, p: 2, bgcolor: "#03a9f4", borderRadius: 1 }}
    >
      <Grid item xs={6}>
        <img src={humidity} alt="humidity" />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Humidity
        </Typography>
        <Typography>{`${data.main.humidity}%`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={wind} alt="wind" />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Wind
        </Typography>
        <Typography>{`${data.wind.speed.toFixed()} km/h`}</Typography>
      </Grid>
    </Grid>
  );
};

export default SecondaryData;
