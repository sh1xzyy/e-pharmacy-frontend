import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../shared/ui/Logo/Logo";
import { useState } from "react";
import Button from "../../shared/ui/Button/Button";
import clsx from "clsx";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../entities/user/operations";
import toast from "react-hot-toast";

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { windowWidth } = useWindowWidth();
  const dispatch = useDispatch();

  const burgerNavList = [
    { text: "Home", to: "/" },
    { text: "Medicine store", to: "/store" },
    { text: "Medicine", to: "/medicine" },
  ];

  const headerNavList = [
    { text: "Home", to: "/" },
    { text: "Medicine", to: "/store" },
    { text: "Statistics", to: "/statistics" },
  ];

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk()).unwrap();
      toast.success("Successfully logged out");
    } catch (error) {
      toast.error("Something went wrong when logged out", error);
    }
  };

  return (
    <div className="container">
      <div className={css.header}>
        <Logo />

        {windowWidth >= 1440 && (
          <nav>
            <ul className={css.navList}>
              {headerNavList.map(({ text, to }, i) => (
                <li className={css.navItem} key={i}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      clsx(css.headerLink, isActive && css.active)
                    }
                  >
                    <span>{text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {isBurgerMenuOpen && windowWidth < 1440 && (
          <div className={css.burgerMenu}>
            <button
              className={css.closeBurgerMenuBtn}
              type="button"
              onClick={() => setIsBurgerMenuOpen(false)}
            >
              <svg width={32} height={32}>
                <use href="/icons/icons.svg#icon-close"></use>
              </svg>
            </button>

            <nav className={css.burgerNav}>
              <ul className={css.burgerMenuNavList}>
                {burgerNavList.map(({ text, to }, i) => (
                  <li className={css.burgerMenuNavItem} key={i}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        clsx(css.burgerLink, isActive && css.active)
                      }
                    >
                      <span>{text}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Button variant="logout" text="Log out" onClick={handleLogout} />
          </div>
        )}

        {windowWidth < 1440 && (
          <button
            className={css.openBurgerMenuBtn}
            type="button"
            onClick={() => setIsBurgerMenuOpen(true)}
          >
            <svg width={32} height={26}>
              <use href="/icons/icons.svg#icon-burger"></use>
            </svg>
          </button>
        )}

        {windowWidth >= 1440 && (
          <Button variant="logout" text="Log out" onClick={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default Header;
