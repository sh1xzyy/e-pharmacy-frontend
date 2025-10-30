import clsx from "clsx";
import css from "./Card.module.css";

const Card = ({ children, variant }) => {
  return (
    <div
      className={clsx(
        css.card,
        variant === "base" && css.base,
        variant === "primary" && css.primary
      )}
    >
      {children}
    </div>
  );
};

export default Card;
