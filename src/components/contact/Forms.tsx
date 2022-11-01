import { Formik } from "formik";

import { Vertical } from "../../layout/layout";
import { FormLabel } from "../Text";

import style from "../../stylesheet/contact/form.module.scss";

export const Forms = (props: any) => {
  const initialValues = {
    username: "",
    email: "",
    subject: "",
    message: "",
  };

  const inputs = [
    {
      text: "Name",
      value: "username",
      type: "text",
    },
    {
      text: "Email",
      value: "email",
      type: "email",
    },
    {
      text: "Subject",
      value: "subject",
      type: "text",
    },
  ];

  const handleOnSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  };

  const handleValidation = (values: any) => {
    const errors = { username: "", email: "", subject: "", message: "" };

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.subject) {
      errors.subject = "Subject is required";
    }
    if (!values.Message) {
      errors.message = "Message is required";
    }
    // /*
    //  * params: errors
    //  * function: remove duplicate then check if errors contains at least one error message.
    //  * returns: Object errors
    //  */
    if (new Set(Object.values(errors)).size !== 1) return errors;
  };

  return (
    <Vertical className={style.form_container} {...props}>
      <Formik
        initialValues={initialValues}
        validate={handleValidation}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form className={style.form_content} onSubmit={handleSubmit}>
              <Vertical gap={28}>
                {inputs.map((input, index) => (
                  <Vertical gap={6}>
                    <label>
                      <FormLabel>{input.text}</FormLabel>
                    </label>
                    <input
                      type={input.type}
                      name={input.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[input.value as keyof typeof initialValues]}
                      required
                    />
                  </Vertical>
                ))}
                <Vertical gap={6}>
                  <label>Message</label>
                  <textarea id="message" name="message" rows={7} cols={50} />
                </Vertical>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting
                      ? "rgba(102, 102, 102, 0.6)"
                      : "#333333",
                  }}
                >
                  Send Message
                </button>
              </Vertical>
            </form>
          );
        }}
      </Formik>
    </Vertical>
  );
};
