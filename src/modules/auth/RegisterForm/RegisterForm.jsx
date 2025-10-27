import { useForm } from "react-hook-form";
import css from "./RegisterForm.module.css";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import Button from "../../../shared/ui/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { registerUserThunk } from "../../../entities/user/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/registerSchema";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(registerUserThunk(values)).unwrap();
      reset();
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <BaseInput
          variant="primary"
          type="text"
          placeholder="User Name"
          {...register("name")}
          error={errors.name?.message}
        />
        <BaseInput
          variant="primary"
          type="email"
          placeholder="Email address"
          {...register("email")}
          error={errors.email?.message}
        />
        <BaseInput
          variant="primary"
          type="tel"
          placeholder="Phone number"
          {...register("phone")}
          error={errors.phone?.message}
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
        <Button variant="primary" text="Register" type="submit" />
        <Link className={css.link} to="/login">
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
