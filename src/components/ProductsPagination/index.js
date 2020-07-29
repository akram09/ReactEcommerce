import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import _ from 'lodash';

const ProductsPagination = (props) => (
  <Pagination>
    {props.currentPage === 1 ? (
      <Pagination.Prev disabled />
    ) : (
      <Pagination.Prev onClick={props.onPrevClicked} />
    )}
    {_.range(1, props.pagesNumber + 1).map((i) => {
      if (i === props.currentPage) {
        return (
          <Pagination.Item
            key={i}
            active
            onClick={() => props.onPageClicked(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
      return (
        <Pagination.Item key={i} onClick={() => props.onPageClicked(i)}>
          {i}
        </Pagination.Item>
      );
    })}
    {props.currentPage === props.pagesNumber ? (
      <Pagination.Next disabled />
    ) : (
      <Pagination.Next onClick={props.onNextClicked} />
    )}
  </Pagination>
);

ProductsPagination.propTypes = {
  pagesNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onNextClicked: PropTypes.func.isRequired,
  onPrevClicked: PropTypes.func.isRequired,
  onPageClicked: PropTypes.func.isRequired,
};

export default ProductsPagination;
