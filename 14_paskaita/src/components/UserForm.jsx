import { Form, Formik } from "formik";
import FormikField from "./FormikField";

const initialValues = {
  name: "",
  address: {
    street: "",
  },
};

const UserForm = () => {
  return (
    <div>
      <Formik initialValues={initialValues}>
        <Form>
          <FormikField name="name" />
          <FormikField name="address.street" />
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
