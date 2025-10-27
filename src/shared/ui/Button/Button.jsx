import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, text, ...rest }) => {
  return (
    <button
      className={clsx(
        css.button,
        variant === "primary" && css.primary,
        variant === "secondary" && css.secondary,
        variant === "neutral" && css.neutral,
        variant === "outline" && css.outline
      )}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
