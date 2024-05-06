import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";

const Widget = ({ data }) => {
  return (
    <Grid container sx={{ mt: 2, p: 3, bgcolor: "#03a9f4", borderRadius: 1 }}>
      <Grid item xs={8}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {`${data.name}, ${data.sys.country}`}
          <PlaceIcon />
        </Typography>
        <Typography
          sx={{ mb: 0.5 }}
        >{`${data.main.temp.toFixed()} °C`}</Typography>
        <Typography>{`Feels like ${data.main.feels_like.toFixed()} °C`}</Typography>
      </Grid>
      <Grid item xs={4}>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather"
        />
      </Grid>
    </Grid>
  );
};

export default Widget;
