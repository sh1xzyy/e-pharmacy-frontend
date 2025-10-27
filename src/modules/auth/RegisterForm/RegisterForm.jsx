import { useForm } from "react-hook-form";
import css from "./RegisterForm.module.css";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import Button from "../../../shared/ui/Button/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
          placeholder="User Name"
          {...register("name")}
        />
        <BaseInput
          variant="primary"
          type="email"
          placeholder="Email address"
          {...register("email")}
        />
        <BaseInput
          variant="primary"
          type="tel"
          placeholder="Phone number"
          {...register("phone")}
        />
        <BaseInput
          variant="primary"
          type="password"
          placeholder="Password"
          {...register("password")}
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
