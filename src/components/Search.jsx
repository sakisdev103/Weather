import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({
  handleSearchLocation,
  searchLocation,
  setSearchLocation,
}) => {
  return (
    <Paper
      component="form"
      sx={{ mt: 5, p: "2px 4px", display: "flex", alignItems: "center" }}
      onSubmit={handleSearchLocation}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#000" }}
        placeholder="Search City"
        inputProps={{ "aria-label": "search city" }}
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};

export default Search;
