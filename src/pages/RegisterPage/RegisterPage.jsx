import css from "./RegisterPage.module.css";
import LogoWrapper from "../../modules/auth/LogoWrapper/LogoWrapper";
import { HealthCareCard, RegisterForm } from "../../modules/auth";

const RegisterPage = () => {
  return (
    <div className="authContainer">
      <LogoWrapper />
      <div className={css.pageWrapper}>
        <HealthCareCard />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
