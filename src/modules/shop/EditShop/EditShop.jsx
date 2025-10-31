import { useForm } from "react-hook-form";
import Card from "../../../shared/ui/Card/Card";
import css from "./EditShop.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { shopSchema } from "../schemas/shopSchema";
import ShopForm from "../ShopForm/ShopForm";

const EditShop = () => {
  //   ? "This information will be displayed publicly so be careful what you share."

  const { reset } = useForm({
    resolver: yupResolver(shopSchema),
  });

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

      <ShopForm type="editShop" onSubmit={onSubmit} />
    </Card>
  );
};

export default EditShop;
