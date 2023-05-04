import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login("name"));
  };

  return (
    <div>
      <div>Login with username and password</div>
      <form onSubmit={handleSubmit}>
        <div>
          Username:
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          Password:
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={() => navigate("/")}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
