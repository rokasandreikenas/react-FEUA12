import * as Yup from "yup";
import { errorMessages } from "../../consts/errors";

export const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email(errorMessages.email)
    .required(errorMessages.requiredField),
  password: Yup.string()
    .required(errorMessages.requiredField)
    .min(5, errorMessages.min),
  repeatPassword: Yup.string().test(
    "passwords-match",
    errorMessages.passwordMatch,
    function (value) {
      return this.parent.password === value;
    }
  ),
});

export const registerInitialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};
