import React from "react";
import emailjs from "emailjs-com";
import FormInputText from "../FormInputText/FormInputText";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone) && values.phone) {
    errors.phone = 'Format should be +39 555 555 5555'
  }

  if(!values.message) {
    errors.message = 'Required'
  }

  return errors;
};

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validate,
    onSubmit: values => {

      const template_params = {
        "from_website_name": "yurirech.it",
        "from_name": values.name,
        "to_name": "Yuri",
        "phone_number": values.phone,
        "email": values.email,
        "message_html": values.message
      };

        emailjs.send('gmail','template_pWsS8eDz', template_params, 'user_oo9bsbo183PQuyl6penUi')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });

      console.log(template_params);
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <Form className="contact-form" onSubmit={formik.handleSubmit}>
      <FormInputText  name='name' id='name' type='text' placeholder='Your name *'
                      onChange={formik.handleChange} value={formik.values.name}/>
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <FormInputText name='email' id='email' type='email' placeholder='your.email@email.com *'
                     onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <FormInputText name='phone' id='phone' type='tel' placeholder='+39 351 555 5555'
                     onChange={formik.handleChange} value={formik.values.phone} />
      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

      <FormInputText name='message' id='message' as='textarea'
                     rows='4' type='text' placeholder='Your message *'
                     onChange={formik.handleChange} value={formik.values.message} />
      {formik.errors.message ? <div>{formik.errors.message}</div> : null}

      <small>Fields with * are required</small>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default ContactForm;
