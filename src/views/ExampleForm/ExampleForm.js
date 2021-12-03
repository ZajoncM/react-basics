import { useFormik, FormikProvider, FieldArray } from "formik";
import { useContext, useState } from "react";
import { AppContext } from "../../providers/AppProvider";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.number()
    .required("Required")
    .when("agreement", {
      is: true,
      then: Yup.number().min(18, "Must Be over 18 years").required("Required"),
    }),
  agreement: Yup.bool(),
});

const Wizard = () => {
  const { addUser, user, editUser, setUser, initialUser } =
    useContext(AppContext);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: user,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (values.id) {
        editUser(values);
        setUser(initialUser);
      } else {
        addUser({ ...values, id: uuidv4() });
      }

      setCurrentStep(0);
      resetForm();
      navigate("/");
    },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  const handleStep = (value) => {
    setCurrentStep((prev) => prev + value);
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} noValidate>
        {currentStep === 0 && (
          <Field
            value={formik.values.name}
            handleChange={formik.handleChange}
            error={formik.errors.name}
            name="name"
            type="text"
          />
        )}

        {currentStep === 1 && (
          <Field
            value={formik.values.surname}
            handleChange={formik.handleChange}
            error={formik.errors.surname}
            name="surname"
            type="text"
          />
        )}

        {currentStep === 2 && (
          <div>
            {" "}
            <Field
              value={formik.values.age}
              handleChange={formik.handleChange}
              error={formik.errors.age}
              name="age"
              type="number"
            />
            <label htmlFor="agreement">Agreement</label>
            <input
              type="checkbox"
              name="agreement"
              onChange={formik.handleChange}
              checked={formik.values.agreement}
            />
          </div>
        )}

        {currentStep === 3 && (
          <Field
            value={formik.values.email}
            handleChange={formik.handleChange}
            error={formik.errors.email}
            name="email"
            type="email"
          />
        )}

        {currentStep === 4 && (
          <div>
            <FieldArray
              name="adresses"
              render={(arrayHelper) => (
                <div>
                  {formik.values.adresses.map((address, index) => (
                    <div key={index}>
                      <Field
                        value={formik.values.adresses[index].city}
                        handleChange={formik.handleChange}
                        name={`adresses[${index}].city`}
                        type="text"
                      />
                      <Field
                        value={formik.values.adresses[index].street}
                        handleChange={formik.handleChange}
                        name={`adresses[${index}].street`}
                        type="text"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrayHelper.push({ city: "", street: "" })}
                  >
                    +
                  </button>
                </div>
              )}
            />
          </div>
        )}

        {currentStep !== 0 && (
          <button type="button" onClick={() => handleStep(-1)}>
            Back
          </button>
        )}
        {currentStep !== 4 && (
          <button type="button" onClick={() => handleStep(1)}>
            Next
          </button>
        )}
        {currentStep === 4 && (
          <button type="submit">{formik.values.id ? "Edit" : "Add"}</button>
        )}
      </form>
    </FormikProvider>
  );
};

const Field = ({ value, handleChange, error, name, type }) => {
  return (
    <div>
      <label htmlFor={name}>{name}: </label>
      <input type={type} value={value} onChange={handleChange} name={name} />
      {error ? <div>{error}</div> : null}
    </div>
  );
};

export default Wizard;
