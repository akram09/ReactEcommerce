import React, { Component } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import ProductsPagination from '../../components/ProductsPagination';
import LayoutMode from '../../components/LayoutMode';
import { paginateProducts } from '../../utils';
import AppConsumer from '../../context/consumer';
export default class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      gridValue: 3,
      itemsPerPage: 12,
      currentPage: 1,
      pagesToShow: 3,
      colValue: 4,
    };
    this.changeLayout = this.changeLayout.bind(this);
    this.onPaginationNextClicked = this.onPaginationNextClicked.bind(this);
    this.onPaginationPreviousClicked = this.onPaginationPreviousClicked.bind(
      this,
    );
    this.onPageClicked = this.onPageClicked.bind(this);
  }

  changeLayout(n) {
    this.setState({
      gridValue: n,
      colValue: n === 4 ? 3 : 4,
    });
  }

  onPaginationNextClicked() {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  }

  onPaginationPreviousClicked() {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
  }

  onPageClicked(n) {
    this.setState({
      currentPage: n,
    });
  }

  render() {
    return (
      <AppConsumer>
        {(context) => (
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

            <Row>
              {paginateProducts(
                context.products,
                this.state.currentPage,
                this.state.itemsPerPage,
              ).map((item) => console.log(item))}
            </Row>
            <Row>
              <ProductsPagination
                pagesNumber={context.products.length / this.state.itemsPerPage}
                currentPage={this.state.currentPage}
                onNextClicked={this.onPaginationNextClicked}
                onPrevClicked={this.onPaginationPreviousClicked}
                onPageClicked={this.onPageClicked}
              />
            </Row>
          </Col>
        )}
      </AppConsumer>
    );
  }
}
