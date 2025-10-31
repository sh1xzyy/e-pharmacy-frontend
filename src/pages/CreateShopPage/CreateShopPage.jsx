import { CreateShop, ShopImage } from "../../modules/shop";
import css from "./CreateShopPage.module.css";

const CreateShopPage = () => {
  return (
    <div className={css.pageWrapper}>
      <div className="container">
        <div className={css.wrapper}>
          <CreateShop />
          <ShopImage />
        </div>
      </div>
    </div>
  );
};

export default CreateShopPage;
