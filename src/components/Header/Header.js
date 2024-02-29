import {
  createTheme,
  TextField,
  ThemeProvider,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ setCategory, category, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      mode: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            id="standard-basic"
            variant="standard"
          />
          <FormControl
            className="select"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={(e) => handleChange(e.target.value)}
              label="Language"
            >
              {categories.map((option) => (
                <MenuItem 
                  key={option.label} 
                  value={option.label}
                >
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
