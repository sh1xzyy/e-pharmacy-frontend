import { useForm } from "react-hook-form";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import css from "./ShopForm.module.css";
import { shopSchema } from "../schemas/shopSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../shared/ui/Button/Button";
import { useState } from "react";
import clsx from "clsx";

const ShopForm = ({ type, values, onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shopSchema),
    defaultValues: values,
  });
  const [selectedRadio, setSelectedRadio] = useState("yes");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("name")}
          label="Shop Name"
          id="name"
          error={errors?.name?.message}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("ownerName")}
          label="Shop Owner Name"
          id="owner"
          error={errors?.owner?.message}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("email")}
          label="Email address"
          id="email"
          error={errors?.email?.message}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("phone")}
          label="Phone Number"
          id="phone"
          error={errors?.phone?.message}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("address")}
          label="Street address"
          id="address"
          error={errors?.address?.message}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("city")}
          label="City"
          id="city"
          error={errors?.city?.message}
        />
        <BaseInput
          variant="normal"
          placeholder="Enter text"
          {...register("zip")}
          label="Zip / Postal"
          id="zip"
          error={errors?.zip?.message}
        />
      </div>

      <div className={css.radiosWrapper}>
        <h3 className={css.radioTitle}>Has own Delivery System?</h3>

        <div className={css.radioBtnsWrapper}>
          {["yes", "no"].map((option) => (
            <div key={option} className={css.radioWrapper}>
              <input
                className="visually-hidden"
                type="radio"
                {...register("ownDeliverySystem")}
                id={option}
                value={option}
                checked={selectedRadio === option}
                onChange={() => setSelectedRadio(option)}
              />

              <label
                htmlFor={option}
                className={clsx(
                  css.radioLabel,
                  selectedRadio === option && css.activeLabel
                )}
              >
                <div
                  className={clsx(
                    css.customRadio,
                    selectedRadio === option && css.activeRadio
                  )}
                />
                {option === "yes" ? "Yes" : "No"}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className={css.buttonWrapper}>
        <Button
          variant="primary"
          text={type === "createShop" ? "Create account" : "Save"}
          type="submit"
        />
      </div>
    </form>
  );
};

export default ShopForm;
