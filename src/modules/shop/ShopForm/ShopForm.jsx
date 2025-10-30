import { useForm } from "react-hook-form";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import css from "./ShopForm.module.css";
import { shopSchema } from "../schemas/shopSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../shared/ui/Button/Button";

const ShopForm = ({ type, onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shopSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("name")}
          label="Shop Name"
          id="name"
          error={errors?.name}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("owner")}
          label="Shop Owner Name"
          id="owner"
          error={errors?.owner}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("email")}
          label="Email address"
          id="email"
          error={errors?.email}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("phone")}
          label="Phone Number"
          id="phone"
          error={errors?.phone}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("address")}
          label="Street address"
          id="address"
          error={errors?.address}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("city")}
          label="City"
          id="city"
          error={errors?.city}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("zip")}
          label="Zip / Postal"
          id="zip"
          error={errors?.zip}
        />
      </div>
      <div className={css.buttonWrapper}>
        <Button
          variant="primary"
          text={type === "createShop" ? "Create account" : "Edit data"}
          type="submit"
        />
      </div>
    </form>
  );
};

export default ShopForm;
