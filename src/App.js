import React from "react";
import Search from "./components/Search";
import TemperatureData from "./components/TemperatureData";
import TemperatureDataDaily from "./components/TemperatureDataDaily";
import Widget from "./components/Widget";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import data from "./weatherAPI.json";

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

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{ backgroundColor: "secondary" }} maxWidth="md">
          <Search />
          <Widget data={data} />
          <TemperatureData data={data} />
          <TemperatureDataDaily data={data} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
