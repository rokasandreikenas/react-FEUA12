import { Form, Formik } from "formik";
import NestedFormFields from "./NestedFormFields";

const initialValues = {
  name: "",
  address: {
    street: "",
  },
};

const NestedForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <NestedFormFields />
        </Form>
      </Formik>
    </div>
  );
};

export default NestedForm;
