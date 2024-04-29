import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { errorMessages } from "../consts/errors";

const validationSchema = Yup.object({
  name: Yup.string().required(errorMessages.requiredField),
  age: Yup.number()
    .required(errorMessages.requiredField)
    .positive(errorMessages.positive)
    .integer(errorMessages.integer),
  fruits: Yup.array()
    .of(Yup.string().required(errorMessages.requiredField))
    .required(errorMessages.requiredField)
    .length(1, errorMessages.length),
});

const initialValues = {
  name: "",
  age: 0,
  fruits: [""],
};

const FormikYup = () => {
  const handleSubmit = (values) => {
    console.log("Submitting:", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <div style={{ marginBottom: 16 }}>
              <Field name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div style={{ marginBottom: 16 }}>
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <FieldArray
                name="fruits"
                render={(arrayHelpers) => (
                  <>
                    {values.fruits.map((_fruit, index) => (
                      <div key={index}>
                        <Field name={`fruits.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button>
                        {Array.isArray(errors.fruits) && (
                          <ErrorMessage
                            name={`fruits.${index}`}
                            component="div"
                          />
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      +
                    </button>
                  </>
                )}
              />
              {typeof errors.fruits === "string" && (
                <ErrorMessage name="fruits" component="div" />
              )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikYup;
