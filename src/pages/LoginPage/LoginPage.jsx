import { HealthCareCard, LoginForm } from "../../modules/auth";
import LogoWrapper from "../../modules/auth/LogoWrapper/LogoWrapper";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className="authContainer">
      <LogoWrapper />
      <div className={css.pageWrapper}>
        <HealthCareCard />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
