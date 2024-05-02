import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const TemperatureDataDaily = () => {
  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ mt: 3, bgcolor: "#03a9f4" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Typography>Date</Typography>
                <Typography>Date</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography>humidity</Typography>
                <Typography>humidity</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography>icon</Typography>
                <Typography>icon</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography>min / max temp</Typography>
                <Typography>min / max temp</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default TemperatureDataDaily;
