import React from 'react';
import './index.scss';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import AppConsumer from '../../context/consumer';

function BrandFilter() {
  return (
    <Card className="mb-3">
      <Card.Header>
        <h3>Brands</h3>
      </Card.Header>
      <ListGroup>
        <AppConsumer>
          {(context) => {
            const brandsWithCount = mapBrandsToNumbers(context.products);
            return context.brands.map((brand) => (
              <ListGroupItem key={brand} style={{ padding: '0rem' }}>
                <div
                  className="custom-checkbox text-capitalize"
                  htmlFor={`checkbox-${brand}`}
                >
                  <input
                    type="checkbox"
                    id={`checkbox-${brand}`}
                    name={brand}
                    className="custom-checkbox__input"
                    // onInput={handleSelectBox}
                  />
                  <label
                    className="custom-checkbox__label"
                    htmlFor={`checkbox-${brand}`}
                  >
                    {brand} ({brandsWithCount[brand]})
                  </label>
                </div>
              </ListGroupItem>
            ));
          }}
        </AppConsumer>
      </ListGroup>
    </Card>
  );
}

const mapBrandsToNumbers = (products) => {
  const brandsWithCount = {};
  products.forEach((product) => {
    brandsWithCount[product.brand] = brandsWithCount[product.brand] + 1 || 1;
  });
  return brandsWithCount;
};

export default BrandFilter;
