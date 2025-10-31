import EditShop from "../../modules/shop/EditShop/EditShop";
import ShopImage from "../../modules/shop/ShopImage/ShopImage";
import css from "./EditShopPage.module.css";

const EditShopPage = () => {
  return (
    <div className={css.pageWrapper}>
      <div className="container">
        <div className={css.wrapper}>
          <EditShop />
          <ShopImage />
        </div>
      </div>
    </div>
  );
};

export default EditShopPage;
