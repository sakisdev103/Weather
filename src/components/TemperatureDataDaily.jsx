import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const TemperatureDataDaily = ({ data }) => {
  const timeConversion = (unix_time) => {
    let date = new Date(unix_time * 1000);
    console.log(date.toTimeString);
    return date.toTimeString;
  };
  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ mt: 3, bgcolor: "#03a9f4" }}>
        <Table>
          <TableBody>
            {data.list.map((item) => {
              return (
                <TableRow key={item.dt}>
                  <TableCell component="th" scope="row">
                    <Typography>
                      {new Date(item.dt * 1000).toDateString().slice(0, 3)}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>{`${item.main.humidity}%`}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>{`${item.main.temp_min.toFixed()}°C ${item.main.temp_max.toFixed()}°C`}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default TemperatureDataDaily;
