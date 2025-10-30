import { useForm } from "react-hook-form";
import Card from "../../../shared/ui/Card/Card";
import css from "./CreateShop.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { shopSchema } from "../schemas/shopSchema";
import ShopForm from "../ShopForm/ShopForm";

const CreateShop = () => {
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
