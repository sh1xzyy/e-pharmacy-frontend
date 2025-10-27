import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <picture>
        <source
          srcSet="/logo/logo-tablet@1x.png 1x, /logo/logo-tablet@2x.png 2x"
          media="(min-width: 768px)"
        />
        <img
          className={css.logo}
          src="/logo/logo-mobile@1x.png"
          srcSet="/logo/logo-mobile@1x.png 1x, /logo/logo-mobile@2x.png 2x"
          alt="e-pharmacy"
        />
      </picture>

      <span className={css.logoText}>E-pharmacy</span>
    </div>
  );
};

export default Logo;
