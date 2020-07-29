import React, { Component } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import LayoutMode from '../../components/LayoutMode';
export default class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      gridValue: 3,
      colValue: 4,
    };
    this.changeLayout = this.changeLayout.bind(this);
  }

  changeLayout(n) {
    this.setState({
      gridValue: n,
      colValue: n === 4 ? 3 : 4,
    });
  }

  render() {
    return (
      <Col lg="9">
        <Row className="mb-3">
          <Col xs="12" className="d-none d-lg-block d-xl-block">
            <Card>
              <Card.Header className="d-flex justify-content-end">
                <span className="mr-3">Change Layout: </span>
                <LayoutMode
                  itemsNumber={3}
                  isActive={this.state.gridValue === 3}
                  onClick={this.changeLayout}
                />
                <LayoutMode
                  itemsNumber={4}
                  isActive={this.state.gridValue === 4}
                  onClick={this.changeLayout}
                />
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Col>
    );
  }
}
