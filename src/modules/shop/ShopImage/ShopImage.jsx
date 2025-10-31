import css from "./ShopImage.module.css";

const ShopImage = () => {
  return (
    <picture>
      <source
        srcSet="/shop/shop-desktop@1x.png 1x, /shop/shop-desktop@2x.png 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="/shop/shop-tablet@1x.png 1x, /shop/shop-tablet@2x.png 2x"
        media="(min-width: 768px)"
      />
      <img
        className={css.image}
        src="/shop/shop-mobile@1x.png"
        srcSet="/shop/shop-mobile@1x.png 1x, /shop/shop-mobile@2x.png 2x"
        alt="medicine"
      />
    </picture>
  );
};

export default ShopImage;
