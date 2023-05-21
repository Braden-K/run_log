import { createTheme } from "@mui/material";
import "./fonts.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#070F23",
    },
    primary: {
      main: "#1B2439",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    primary: "#173A5E",
    secondary: "#46505A",
  },
});

export default theme;
