import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Widget = ({ data }) => {
  //   console.log(data.current.weather[0].icon);
  return (
    <Grid container sx={{ mt: 3, p: 3, bgcolor: "#03a9f4", borderRadius: 1 }}>
      <Grid item xs={8}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Location
        </Typography>
        <Typography
          sx={{ mb: 0.5 }}
        >{`${data.current.temp.toFixed()} °C`}</Typography>
        <Typography>{`Feels like ${data.current.feels_like.toFixed()} °C`}</Typography>
      </Grid>
      <Grid item xs={4}>
        <img
          src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
        />
      </Grid>
    </Grid>
  );
};

export default Widget;
