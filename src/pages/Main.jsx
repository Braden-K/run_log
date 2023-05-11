import Stack from "@mui/joy/Stack";
import { Box } from "@mui/material";
import Run from "../components/Run";
import { useSelector } from "react-redux";

const Main = () => {
  //const user = useSelector((state) => state.user);
  const user = null;

  return (
    <div>
      {user ? (
        <div>
          <Box boxShadow={3} m={2} sx={{ borderRadius: "2px" }}>
            <Stack spacing={2} p={2}>
              <Run />
              <Run />
              <Run />
            </Stack>
          </Box>
        </div>
      ) : (
        <div>Login to continue</div>
      )}
    </div>
  );
};

export default Main;
