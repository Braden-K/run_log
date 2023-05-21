import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login, logout } from "../userSlice";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (inputData) => {
    console.log(inputData);

    await fetch("http://localhost:5000/api/v1/users/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((users) => {
        console.log(users);
        const user = users.find((user) => user.username === inputData.username);
        if (user && user.password === inputData.password) {
          dispatch(login({ name: user.firstname, userId: user.id }));
          navigate("/");
        } else if (user) {
          console.log("usernamer exists but wrong password");
          dispatch(logout());
        } else {
          console.log("no user with that userame!");
        }
      });
  };

  return (
    <form>
      <Paper
        elevation={2}
        sx={{ backgroundColor: "primary.main", mt: 8, mx: 40, p: 3 }}
      >
        <Typography>Enter login information</Typography>
        <Box sx={{ m: 2 }}>
          <Controller
            name={"username"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                onChange={onChange}
                value={value}
                label={"username"}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name={"password"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} label={"password"} />
            )}
          />
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

export default Login;
