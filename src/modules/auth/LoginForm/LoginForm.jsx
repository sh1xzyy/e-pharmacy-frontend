import { useForm } from "react-hook-form";
import css from "./LoginForm.module.css";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import Button from "../../../shared/ui/Button/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit((values) => console.log(values))}
    >
      <div className={css.inputsWrapper}>
        <BaseInput
          variant="primary"
          type="text"
          placeholder="Email address"
          {...register("email")}
        />
        <BaseInput
          variant="primary"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className={css.actionButtonsWrapper}>
        <Button variant="primary" text="Log in" type="submit" />
        <Link className={css.link} href="/register">
          Don't have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
