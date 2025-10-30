import CreateShop from "../../modules/shop/CreateShop/CreateShop";
import css from "./CreateShopPage.module.css";

const CreateShopPage = () => {
  return (
    <div className={css.pageWrapper}>
      <div className="container">
        <CreateShop />
      </div>
    </div>
  );
};

export default CreateShopPage;
