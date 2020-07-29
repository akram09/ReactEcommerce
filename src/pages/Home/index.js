import React from 'react';
import { Row, Container } from 'react-bootstrap';
import FilterBar from '../../containers/FilterBar';
import ProductsList from '../../containers/ProductsList';

function Home() {
  return (
    <Container style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <Row>
        <FilterBar />
        <ProductsList></ProductsList>
      </Row>
    </Container>
  );
}

export default Home;
