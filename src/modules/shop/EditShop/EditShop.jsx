import { useForm } from "react-hook-form";
import Card from "../../../shared/ui/Card/Card";
import css from "./EditShop.module.css";
import ShopForm from "../ShopForm/ShopForm";
import { useSelector } from "react-redux";
import { selectShop } from "../../../entities/shop/selectors";

const EditShop = () => {
  const shop = useSelector(selectShop);
  const { reset } = useForm();

  const onSubmit = async (values) => {
    try {
      console.log(values);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card variant="base">
      <div className={css.textWrapper}>
        <h2 className={css.title}>Edit Data</h2>
        <p className={css.description}>
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <ShopForm type="editShop" values={shop} onSubmit={onSubmit} />
    </Card>
  );
};

export default EditShop;
