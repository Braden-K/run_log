import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import AddRun from "./pages/AddRun";
import Navbar from "./components/Navbar";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AddRun" element={<AddRun />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
