import { useField, useFormikContext } from "formik";
import FormikField from "./FormikField";

const NestedFormFields = () => {
  const [field, meta, helpers] = useField("address");
  //   console.log(field); // {name: 'address', value: {…}, onChange: ƒ, onBlur: ƒ}
  //   console.log(meta); // {value: {…}, error: undefined, touched: true, initialValue: {…}, initialTouched: false, …}
  //   console.log(helpers); // {setValue: ƒ, setTouched: ƒ, setError: ƒ}

  const { values, isSubmitting } = useFormikContext();
  console.log(values);

  const address = field.value;
  return (
    <>
      <p>{address.street}</p>
      <FormikField name="name" />
      <FormikField name="address.street" />
    </>
  );
};

export default NestedFormFields;
