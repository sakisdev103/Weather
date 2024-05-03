import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chart from "chart.js/auto";

const TemperatureData = ({ dataForecast }) => {
  useEffect(() => {
    let myChart;
    const chartFunc = () => {
      const graphArea = document.getElementById("myChart");

      let data = {
        labels: dataForecast.list.map((item) => {
          return item.dt_txt.slice(11, 16);
        }),
        datasets: [
          {
            label: "",
            data: dataForecast.list.map((item) => {
              return item.main.temp.toFixed();
            }),
            borderColor: "#83f28f",
            backgroundColor: "#83f28f",
            borderWidth: 2,
          },
        ],
      };

      let options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        },
      };
      myChart = new Chart(graphArea, { type: "line", data, options });
    };
    chartFunc();
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ mt: 3, bgcolor: "#03a9f4" }}>
        <Table>
          <TableBody>
            <TableRow>
              {dataForecast.list.map((item) => {
                return (
                  <TableCell component="th" scope="row" key={item.dt}>
                    <Typography>{item.dt_txt.slice(11, 16)}</Typography>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    />
                    <Typography>{`${item.main.temp.toFixed()} °C`}</Typography>
                    {/* <Typography>{`${item.main.humidity}%`}</Typography> */}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
        <div style={{ height: "200px" }}>
          <canvas id="myChart"></canvas>
        </div>
      </TableContainer>
    </React.Fragment>
  );
};

export default TemperatureData;
