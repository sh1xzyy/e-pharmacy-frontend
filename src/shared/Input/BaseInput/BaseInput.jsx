import clsx from "clsx";
import css from "./BaseInput.module.css";
const BaseInput = ({ variant, value, onChange, ref, ...rest }) => {
  return (
    <div>
      {rest?.label && (
        <label className={css.label} htmlFor={rest?.id}>
          {rest.label}
        </label>
      )}
      <input
        className={clsx(
          css.input,
          variant === "primary" && css.primary,
          variant === "normal" && css.normal
        )}
        onChange={onChange}
        value={value}
        ref={ref}
        id={rest?.id}
        {...rest}
      />
    </div>
  );
};

export default BaseInput;
