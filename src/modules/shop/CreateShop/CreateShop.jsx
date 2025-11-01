import { useForm } from "react-hook-form";
import Card from "../../../shared/ui/Card/Card";
import css from "./CreateShop.module.css";
import ShopForm from "../ShopForm/ShopForm";
import toast from "react-hot-toast";
import { createShopThunk } from "../../../entities/shop/operations";
import { useDispatch } from "react-redux";

const CreateShop = () => {
  const dispatch = useDispatch();
  const { reset } = useForm();

  const onSubmit = async (values) => {
    try {
      let body = null;
      if (values?.ownDeliverySystem === "yes") {
        body = { ...values, ownDeliverySystem: true };
      } else {
        body = { ...values, ownDeliverySystem: false };
      }

      await dispatch(createShopThunk(body)).unwrap();
      reset();
      toast.success("Created Shop");
    } catch (error) {
      toast.success(error);
    }
  };

  return (
    <Card variant="base">
      <div className={css.textWrapper}>
        <h2 className={css.title}>Create your Shop</h2>
        <p className={css.description}>
          This FigNation will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <ShopForm type="createShop" onSubmit={onSubmit} />
    </Card>
  );
};

export default CreateShop;
