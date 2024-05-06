import React, { useState } from "react";
import Search from "./components/Search";
import TemperatureData from "./components/TemperatureData";
import Widget from "./components/Widget";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import SecondaryData from "./components/SecondaryData";
import SunData from "./components/SunData";
import ChartData from "./components/ChartData";

const theme = createTheme({
  palette: {
    background: {
      default: "#1976d2",
    },
    text: {
      primary: "#fff",
    },
  },
});

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getCurrentWeather = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      )
      .then((resp) => {
        // console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => console.log(error));
  };

  const getForecast = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      )
      .then((resp) => {
        // console.log(resp.data);
        setForecast(resp.data);
      })
      .catch((error) => console.log(error));
  };

  const [searchLocation, setSearchLocation] = useState("");

  const handleSearchLocation = (e) => {
    e.preventDefault();
    getCurrentWeather(searchLocation);
    getForecast(searchLocation);
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Search
            handleSearchLocation={handleSearchLocation}
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
          {data !== null && forecast !== null && (
            <>
              <Widget data={data} />
              <TemperatureData dataForecast={forecast} />
              <SunData data={data} />
              <SecondaryData data={data} />
              <ChartData dataForecast={forecast} />
            </>
          )}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
