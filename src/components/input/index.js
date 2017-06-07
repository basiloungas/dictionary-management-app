import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

export default (props) => {
  const {
    label,
    value,
    placeholder,
    onChange,
  } = props;

  const handleOnChange = (e) => {
    e.preventDefault();

    onChange(e.target.value);
  }

  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </FormGroup>
  );
};
