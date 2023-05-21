import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadRunList } from "../runSlice";
import {
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Slider,
} from "@mui/material";
import { Controller, handleSubmit } from "react-hook-form";

const schema = yup
  .object({
    distance: yup.string().required(),
    pace: yup.string().required(),
    hr: yup.string().required(),
  })
  .required();

const AddRun = () => {
  const userId = useSelector((state) => state.user?.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      min: 30,
      sec: 30,
      distance: "0",
      hr: "0",
    },
  });

  const onSubmit = async (inputData) => {
    console.log(inputData);
    console.log("in on submit");

    // const runData = {
    //   distance: inputData.distance,
    //   sec_per_mile: inputData.min,
    //   avg_hr: inputData.hr,
    //   user_id: userId,
    // };

    // await fetch("http://localhost:5000/api/v1/runs/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(runData),
    // }).then(
    //   await fetch(`http://localhost:5000/api/v1/runs/${userId}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((runList) => {
    //       console.log(runList);
    //       dispatch(loadRunList(runList));
    //       navigate("/");
    //     })
    // );
  };

  const minValue = watch("min");
  const secValue = watch("sec");

  const handleMinChange = (event, value) => {
    setValue("min", value);
  };

  const handleSecChange = (event, value) => {
    setValue("sec", value);
  };

  return (
    <form>
      <Paper
        elevation={2}
        sx={{ backgroundColor: "primary.main", mt: 8, mx: 40, p: 3 }}
      >
        <Typography>Enter Run Data</Typography>
        <Box sx={{ m: 2 }}>
          <Controller
            name={"distance"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} label={"distance"} />
            )}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name={"hr"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"heart rate"}
              />
            )}
          />
        </Box>
        <Box>
          <Typography sx={{ color: "text.secondary" }}>Time</Typography>

          <Controller
            name={"min"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Slider onChange={handleMinChange} defaultValue={30} max={180} />
            )}
          />
          <Typography sx={{ color: "text.secondary", fontSize: 13, mt: -2 }}>
            {minValue + " Minutes"}
          </Typography>
        </Box>
        <Box>
          <Controller
            name={"sec"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Slider
                size="small"
                onChange={handleSecChange}
                defaultValue={30}
                max={60}
              />
            )}
          />
          <Typography sx={{ color: "text.secondary", fontSize: 13, mt: -2 }}>
            {secValue + " Seconds"}
          </Typography>
        </Box>
        <Button
          onClick={handleSubmit(onSubmit)}
          sx={{ color: "white", mt: 2, mb: -1 }}
        >
          Submit
        </Button>
      </Paper>
    </form>
  );
};

export default AddRun;
