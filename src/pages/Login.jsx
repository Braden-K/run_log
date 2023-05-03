import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { Input, InputLabel, FormControl } from "@mui/material";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login("name"));
  };

  return (
    <div>
      <div>Login with username and password</div>
      <FormControl>
        <InputLabel>Username: </InputLabel>
        <Input />
        <InputLabel>Age: </InputLabel>
        <Input />
      </FormControl>
    </div>
  );
};

export default Login;
