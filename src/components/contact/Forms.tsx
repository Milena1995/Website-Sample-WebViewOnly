import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import { FormLabel, H3Medium } from 'src/components/Text';
import style from 'src/stylesheet/contact/form.module.scss';
import { Vertical } from 'src/layout/layout';
import { PUBLICKEY, SERVICEID, TEMPLATEID } from 'src/configs';

export const Forms = (props: any) => {
  const initialValues = {
    username: '',
    email: '',
    subject: '',
    message: ''
  };
  const [sent, setSent] = useState(false);

  const inputs = [
    {
      text: 'Name',
      value: 'username',
      type: 'text'
    },
    {
      text: 'Email',
      value: 'email',
      type: 'email'
    },
    {
      text: 'Subject',
      value: 'subject',
      type: 'text'
    }
  ];

  const sendEmail = (values: any, { setSubmitting }: any) => {
    // setSubmitting(false);
    emailjs.send(SERVICEID, TEMPLATEID, values, PUBLICKEY).then(
      (result) => {
        setSent(true);
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
        onSubmit={sendEmail}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
          return (
            <form className={style.form_content} onSubmit={handleSubmit}>
              <Vertical gap={28}>
                {sent && (
                  <H3Medium
                    color={'white'}
                    borderRadius={4}
                    backgroundColor={'#486a6f'}
                    textAlign={'center'}
                    boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
                    Message sent!
                  </H3Medium>
                )}
                {inputs.map((input, index) => (
                  <Vertical gap={6} key={`${input}${index}`}>
                    <label>
                      <FormLabel>{input.text} </FormLabel>
                    </label>
                    <input
                      type={input.type}
                      name={input.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[input.value as keyof typeof initialValues]}
                      autoComplete={'off'}
                      required
                    />
                  </Vertical>
                ))}
                <Vertical gap={6}>
                  <label>Message</label>
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values['message']}
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
                    opacity: isSubmitting ? 0.3 : ''
                  }}>
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
