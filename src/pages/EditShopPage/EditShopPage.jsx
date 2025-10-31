import { EditShop, ShopImage } from "../../modules/shop";
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
