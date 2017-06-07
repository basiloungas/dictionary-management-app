import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap';

export default (props) => {
  const {createDictionary, value, updateValue} = props;

  const onChange = (e) => {
    e.preventDefault();

    updateValue(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();

    createDictionary(value);
    updateValue('');
  }

  return (
    <div className="well">
      <form>
        <FormGroup>
          <ControlLabel>Enter new Dictionary's name:</ControlLabel>
          <FormControl
            type="text"
            value={value}
            placeholder="Enter dictionary name"
            onChange={onChange}
          />
        </FormGroup>

        <Button type="submit" disabled={!value} onClick={onClick}>
          Submit
        </Button>
      </form>
    </div>
  );
};
