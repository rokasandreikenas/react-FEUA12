import { Formik, Form } from "formik";

const SelectForm = () => {
  return (
    <div>
      <h2>SelectForm</h2>
      <Formik
        initialValues={{ fruit: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <select
              onChange={(event) => setFieldValue("fruit", event.target.value)}
            >
              <option value="">Select fruit</option>
              <option value="carrot">Carrot</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
            </select>
            <button type="submit">Apply</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SelectForm;
