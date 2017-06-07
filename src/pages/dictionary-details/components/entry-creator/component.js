import React from 'react';
import {
  Button,
  Row,
  Col,
} from 'react-bootstrap';

import Input from '../../../../components/input';

export default (props) => {
  const {
    dictionaryId,
    createEntry,
    domain,
    updateDomain,
    range,
    updateRange,
  } = props;

  const onClick = (e) => {
    e.preventDefault();

    createEntry({
      dictionaryId,
      domain,
      range,
    });

    updateDomain('');
    updateRange('');
  }

  const isDisabled = !domain || !range;

  return (
    <div className="well">
      <p>Add new entry to the dictionary:</p>
      <form>
        <Row className="show-grid">

          <Col md={6}>
            <Input
              label="Domain"
              value={domain}
              placeholder="Enter domain name"
              onChange={updateDomain}
            />
          </Col>

          <Col md={6}>
          <Input
              label="Range"
              value={range}
              placeholder="Enter range name"
              onChange={updateRange}
            />
          </Col>
        </Row>

        <Button type="submit" disabled={isDisabled} onClick={onClick}>
          Submit
        </Button>
      </form>
    </div>
  );
};
