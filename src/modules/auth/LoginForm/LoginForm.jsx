import { useForm } from "react-hook-form";
import css from "./LoginForm.module.css";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import Button from "../../../shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../../entities/user/operations";
import toast from "react-hot-toast";
import { loginSchema } from "../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values) => {
    try {
      const response = await dispatch(loginUserThunk(values)).unwrap();
      toast.success(`Welcome back, ${response.user.name}!`);
      reset();
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <BaseInput
          variant="primary"
          type="email"
          placeholder="Email address"
          {...register("email")}
          error={errors.email?.message}
        />
        <BaseInput
          variant="primary"
          type="password"
          placeholder="Password"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
      <div className={css.actionButtonsWrapper}>
        <Button variant="primary" text="Log in" type="submit" />
        <Link className={css.link} to="/register">
          Don't have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
