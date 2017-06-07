import React from 'react';
import {Button} from 'react-bootstrap';
import Input from '../../../../components/input';

export default (props) => {
  const {createDictionary, value, updateValue} = props;

  const onClick = (e) => {
    e.preventDefault();

    createDictionary(value);
    updateValue('');
  }

  return (
    <div className="well">
      <form>
        <Input
          label="Enter new Dictionary's name:"
          value={value}
          placeholder="Enter dictionary name"
          onChange={updateValue}
        />

        <Button type="submit" disabled={!value} onClick={onClick}>
          Submit
        </Button>
      </form>
    </div>
  );
};
