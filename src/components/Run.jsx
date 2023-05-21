import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Date from "./Date";

const Run = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        boxShadow: 5,
        borderRadius: 2,
        p: 2,
        m: 4,
      }}
      onClick={() => props.deleteRun(props.run.run_id)}
    >
      <Box sx={{ color: "text.secondary" }}>
        <Date date={props.run.activity_date} />
      </Box>
      <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
        <Typography display="inline" sx={{ fontSize: 28 }}>
          {props.run.distance + " "}
        </Typography>
        <Typography display="inline" sx={{ fontSize: 20 }}>
          {parseInt(props.run.distance) === 1 ? "Mile" : "Miles"}
        </Typography>
      </Box>
      <Box
        sx={{
          color: "error.dark",
          display: "inline",
          fontWeight: "bold",
          mx: 0.5,
          fontSize: 14,
        }}
      >
        {props.run.avg_hr + " bpm"}
      </Box>
      <Box
        sx={{
          color: "success.dark",
          display: "inline",
          fontWeight: "bold",
          mx: 0.5,
          fontSize: 14,
        }}
      >
        {props.run.sec_per_mile + " min/mi"}
      </Box>
    </Box>
  );
};

export default Run;
