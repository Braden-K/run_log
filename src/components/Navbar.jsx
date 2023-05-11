import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //const user = useSelector((state) => state.user);
  const user = null;
  const navigate = useNavigate();

  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <Button color="inherit">
          <Typography variant="h6">Run Log</Typography>
        </Button>
        <div style={{ marginLeft: "auto" }}>
          {user ? (
            <Button
              color="inherit"
              style={{ fontSize: 12 }}
              onClick={() => navigate("/AddRun")}
            >
              Add run
            </Button>
          ) : (
            <Button
              color="inherit"
              style={{ fontSize: 12 }}
              onClick={() => navigate("/Login")}
            >
              Login
            </Button>
          )}
          <Button
            color="inherit"
            style={{ fontSize: 12 }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
