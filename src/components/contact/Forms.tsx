import { Formik } from "formik";
import emailjs from "@emailjs/browser";

import { Vertical } from "../../layout/layout";
import { FormLabel } from "../Text";
import style from "../../stylesheet/contact/form.module.scss";
import { PUBLICKEY, SERVICEID, TEMPLATEID } from "../../configs";

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

  const sendEmail = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    emailjs.send(SERVICEID, TEMPLATEID, values, PUBLICKEY).then(
      (result) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 400);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Vertical className={style.form_container} {...props}>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={sendEmail}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
          return (
            <form className={style.form_content} onSubmit={handleSubmit}>
              <Vertical gap={28}>
                {inputs.map((input, index) => (
                  <Vertical gap={6}>
                    <label>
                      <FormLabel>{input.text} </FormLabel>
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
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values["message"]}
                    id="message"
                    name="message"
                    rows={7}
                    cols={50}
                    required
                  />
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
