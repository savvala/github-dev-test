import React from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';


const SearchBar = ({ handleSearch }) => {
  return(
    <Row>
      <Col md={6}>
        <FormGroup>
          <FormControl type="text" placeholder="Search By Username or Organisation" onChange={handleSearch} />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
