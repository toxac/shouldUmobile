import React from "react";
import { useFormik } from "formik";
import formOptions from "../data/formOptions";

const validate = (values) => {
  const errors = {};

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      appCategory: "",
      appType: "",
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
    <div className="section">
      <div className="container">
        <div className="column">
          <form onSubmit={formik.handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input is-primary"
                  type="text"
                  name="email"
                  value={formik.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="email"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <div className="select is-primary is-fullwidth">
                  <select
                    value={formik.appCategory}
                    name="appCategory"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select a category of the app</option>
                    {formOptions.appCategory.map((category) => {
                      return (
                        <option value={category.id} key={category.id}>
                          {category.categoryName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <div className="select is-primary is-fullwidth">
                  <select
                    value={formik.appType}
                    name="appType"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select type of the app</option>
                    {formOptions.appType.map((category) => {
                      return (
                        <option value={category.id} key={category.id}>
                          {category.type}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div>
              {formOptions.appFeatures.map((feature) => {
                return (
                  <span className="tag is-light is-large mr-2 mb-2">
                    {feature.feature}
                  </span>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
