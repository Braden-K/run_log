import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // TODO: fetch user by username from db and take firstname and id and store in store for current user state
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Username</div>
      <input {...register("username")} />
      <p>{errors.username?.message}</p>

      <div>Password</div>
      <input {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default Login;
