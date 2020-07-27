import React from 'react';
import { Row, Container } from 'react-bootstrap';
import FilterBar from '../../containers/FilterBar';

function Home() {
  return (
    <Container style={{ paddingTop: '6rem' }}>
      <Row>
        <FilterBar />
      </Row>
    </Container>
  );
}

export default Home;
