import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikField from "./FormikField";

// pagrinidiniai parametrai yra initialValues

const loginInitialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h1>LoginForm</h1>
      {/* <Formik initialValues={loginInitialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" type="email" />
          <button type="submit">Login</button>
        </Form>
      </Formik> */}
      <br />

      <Formik
        initialValues={loginInitialValues}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email laukas negali būti tuščias";
          }

          if (!values.password) {
            errors.password = "Laukas negali būti tuščias";
          } else if (values.password.length <= 5) {
            errors.password = "Slaptažodis turi būti ilgesnis nei 5 simboliai";
          }

          return errors;
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <p style={{ color: "green" }}>
              Account will be created with: {values.email}
            </p>
            <Field name="email" type="email" />
            <ErrorMessage name="email">
              {(error) => <div style={{ color: "red" }}>{error}</div>}
            </ErrorMessage>
            <FormikField
              name="password"
              type="password"
              placeholder="Slaptažodis"
            />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
