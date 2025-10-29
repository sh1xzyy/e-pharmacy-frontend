import RegisterForm from "../../modules/auth/RegisterForm/RegisterForm";
import HealthCareCard from "../../modules/auth/HealthCareCard/HealthCareCard";
import css from "./RegisterPage.module.css";
import LogoWrapper from "../../modules/auth/LogoWrapper/LogoWrapper";

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
