import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import moment from "moment";

const TemperatureData = ({ dataForecast }) => {
  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ mt: 2, bgcolor: "#03a9f4" }}>
        <Table>
          <TableBody>
            <TableRow>
              {dataForecast.list.slice(0, 9).map((item) => {
                return (
                  <TableCell
                    component="th"
                    scope="row"
                    key={item.dt}
                    align="center"
                  >
                    <Typography>
                      {moment
                        .utc(item.dt, "X")
                        .add(dataForecast.city.timezone, "seconds")
                        .format("HH:mm ")}
                    </Typography>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt="weather"
                    />
                    <Typography>{`${item.main.temp.toFixed()} °C`}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default TemperatureData;
