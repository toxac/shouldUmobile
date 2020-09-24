import React from "react";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      appCategory: "",
      appUsageFrequency: "",
      appDiscovery: "",
    },
    validate,
    onSubmit: () => {
      console.log("hey");
    },
    onReset: () => {
      console.log("hey again");
    },
  });

  return (
    <div className="something">
      <h1>This is a Form</h1>
    </div>
  );
};

export default Form;
