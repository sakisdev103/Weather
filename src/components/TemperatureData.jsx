import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const TemperatureData = ({ data }) => {
  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ mt: 3, bgcolor: "#03a9f4" }}>
        <Table>
          <TableBody>
            <TableRow>
              {data.list.map((item) => {
                return (
                  <TableCell component="th" scope="row">
                    <Typography>{item.dt_txt.slice(11, 16)}</Typography>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
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
