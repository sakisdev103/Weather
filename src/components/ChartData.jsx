import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Chart from "chart.js/auto";

const ChartData = ({ dataForecast }) => {
  let arrDif = [];
  const calculation = (data) => {
    for (let i = 1; i < data.length; i++) {
      if (data[i - 1].dt_txt.slice(0, 10) !== data[i].dt_txt.slice(0, 10)) {
        arrDif = [...arrDif, data[i].dt_txt.slice(0, 10)];
      }
    }
  };
  calculation(dataForecast.list);

  useEffect(() => {
    let myChart;
    const chartFunc = () => {
      const graphArea = document.getElementById("myChart");

      let data = {
        labels: dataForecast.list
          .filter((item) => {
            return item.dt_txt.slice(0, 10) === arrDif[0];
          })
          .map((item) => {
            return item.dt_txt.slice(11, 16);
          }),
        datasets: [
          {
            label: arrDif[0],
            data: dataForecast.list
              .filter((item) => {
                return item.dt_txt.slice(0, 10) === arrDif[0];
              })
              .map((item) => {
                return item.main.temp.toFixed();
              }),
            borderColor: "#001822",
            backgroundColor: "#001822",
            borderWidth: 2,
          },
          {
            label: arrDif[1],
            data: dataForecast.list
              .filter((item) => {
                return item.dt_txt.slice(0, 10) === arrDif[1];
              })
              .map((item) => {
                return item.main.temp.toFixed();
              }),
            borderColor: "#F44E03",
            backgroundColor: "#F44E03",
            borderWidth: 2,
          },
          {
            label: arrDif[2],
            data: dataForecast.list
              .filter((item) => {
                return item.dt_txt.slice(0, 10) === arrDif[2];
              })
              .map((item) => {
                return item.main.temp.toFixed();
              }),
            borderColor: "#F402A9",
            backgroundColor: "#F402A9",
            borderWidth: 2,
          },
          {
            label: arrDif[3],
            data: dataForecast.list
              .filter((item) => {
                return item.dt_txt.slice(0, 10) === arrDif[3];
              })
              .map((item) => {
                return item.main.temp.toFixed();
              }),
            borderColor: "#A8F402",
            backgroundColor: "#A8F402",
            borderWidth: 2,
          },
          {
            label: arrDif[4],
            data: dataForecast.list
              .filter((item) => {
                return item.dt_txt.slice(0, 10) === arrDif[4];
              })
              .map((item) => {
                return item.main.temp.toFixed();
              }),
            borderColor: "#5d4037",
            backgroundColor: "#5d4037",
            borderWidth: 2,
          },
        ],
      };

      let options = {
        plugins: {
          legend: {
            labels: {
              color: "#fff",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#fff",
            },
            grid: {
              color: "#fff",
            },
          },
          y: {
            // beginAtZero: true,
            ticks: {
              color: "#fff",
            },
            grid: {
              color: "#fff",
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      };
      myChart = new Chart(graphArea, { type: "line", data, options });
    };
    chartFunc();
    return () => {
      myChart.destroy();
    };
  }, [dataForecast]);
  return (
    <Container
      sx={{
        mt: 3,
        pt: 3,
        bgcolor: "#03a9f4",
        borderRadius: 1,
        height: "400px",
      }}
    >
      <canvas id="myChart"></canvas>
    </Container>
  );
};

export default ChartData;
