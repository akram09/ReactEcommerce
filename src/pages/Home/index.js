import React from 'react';
import { Row, Container } from 'react-bootstrap';
import FilterBar from '../../containers/FilterBar';

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <FilterBar />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
