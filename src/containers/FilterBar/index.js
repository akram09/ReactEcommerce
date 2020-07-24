import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OrderFilter from '../../components/OrderFilter';
import BrandFilter from '../../components/BrandFilter';

function FilterBar() {
  return (
    <Col lg="3">
      <Row>
        <Col xs="12">
          <BrandFilter />
        </Col>
        <Col xs="12">
          <OrderFilter />
        </Col>
      </Row>
    </Col>
  );
}

export default FilterBar;
