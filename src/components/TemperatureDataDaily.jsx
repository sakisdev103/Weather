import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const TemperatureDataDaily = ({ data }) => {
  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ mt: 3, bgcolor: "#03a9f4" }}>
        <Table>
          <TableBody>
            {data.daily.map((day) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography>{day.dt}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>{`${day.humidity}%`}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <img
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography>{`${day.temp.min.toFixed()}°C ${day.temp.max.toFixed()}°C`}</Typography>
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
