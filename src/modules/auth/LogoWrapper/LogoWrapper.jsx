import Logo from "../../../shared/ui/Logo/Logo";
import css from "./LogoWrapper.module.css";
const LogoWrapper = () => {
  return (
    <div className={css.logoWrapper}>
      <Logo />
    </div>
  );
};

export default LogoWrapper;
