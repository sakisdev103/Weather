import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import sunrise from "../icons/sunrise.png";
import sunset from "../icons/sunset.png";
import moment from "moment";

const SunData = ({ data }) => {
  return (
    <Grid
      container
      align="center"
      justify="center"
      alignItems="center"
      sx={{ mt: 3, p: 3, bgcolor: "#03a9f4", borderRadius: 1 }}
    >
      <Grid item xs={6}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Sunrise
        </Typography>
        <Typography>
          {moment
            .utc(data.sys.sunrise, "X")
            .add(data.timezone, "seconds")
            .format("HH:mm ")}
        </Typography>
        <img src={sunrise} alt="sunrise" />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Sunset
        </Typography>
        <Typography>
          {moment
            .utc(data.sys.sunset, "X")
            .add(data.timezone, "seconds")
            .format("HH:mm ")}
        </Typography>
        <img src={sunset} alt="sunset" />
      </Grid>
    </Grid>
  );
};

export default SunData;
