import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {/* <FormikControl
              name="email"
              type="email"
              label="Email"
              control="input"
            />
            <FormikControl
              name="password"
              type="password"
              label="Password"
              control="input"
            /> */}
            <FormikControl
              name="email"
              type="email"
              label="Email"
              control="chacrainput"
            />
            <FormikControl
              name="password"
              type="password"
              label="Password"
              control="chacrainput"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
