import { Spinner } from "@blueprintjs/core";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.wrapper}>
      <Spinner size={50} intent="primary" />
    </div>
  );
};

export default Loader;
