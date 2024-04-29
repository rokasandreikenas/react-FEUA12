import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerInitialValues, registerValidationSchema } from "./consts";

const RegisterForm = () => {
  const handleSubmit = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email" style={{ display: "block" }}>
            Email:
          </label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password" style={{ display: "block" }}>
            Password:
          </label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="repeatPassword" style={{ display: "block" }}>
            Repeat password:
          </label>
          <Field type="password" name="repeatPassword" />
          <ErrorMessage name="repeatPassword" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
