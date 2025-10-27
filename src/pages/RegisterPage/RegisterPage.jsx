import RegisterForm from "../../modules/auth/RegisterForm/RegisterForm";
import HealthCareCard from "../../modules/auth/HealthCareCard/HealthCareCard";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className={css.pageWrapper}>
        <HealthCareCard />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
