import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import brands from '../../data/brands';

function BrandFilter({ brandsCount }) {
  return (
    <Card>
      <Card.Header>Brands</Card.Header>
    </Card>
  );
}

BrandFilter.propTypes = {
  brandsCount: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BrandFilter;
