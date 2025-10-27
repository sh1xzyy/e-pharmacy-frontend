import clsx from "clsx";
import css from "./BaseInput.module.css";
import { forwardRef } from "react";

const BaseInput = forwardRef(({ variant, ...rest }, ref) => {
  return (
    <>
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
        ref={ref}
        {...rest}
      />
    </>
  );
});

export default BaseInput;
