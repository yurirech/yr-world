import React from "react";
import Form from "react-bootstrap/Form";


const FormInputText = props => {
  return (
      <Form.Group controlId={props.controlId}>
        <Form.Label column=''>{props.formLabel}</Form.Label>
        <Form.Control id={props.id} name={props.name} rows={props.rows}
                      as={props.as} type={props.type} placeholder={props.placeholder}
                      onChange={props.onChange} value={props.value} />
      </Form.Group>
  );
};

export default FormInputText;
