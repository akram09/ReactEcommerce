import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './index.scss';

const SlideDots = (props) => (
  <div className="dots">
    {_.range(props.dotsNumber).map((i) => (
      <button
        onClick={() => props.onItemChange(i)}
        type="button"
        className={i === props.activeItemIndex ? 'dot active' : 'dot'}
      >
        <span></span>
      </button>
    ))}
  </div>
);

SlideDots.propTypes = {
  dotsNumber: PropTypes.number.isRequired,
  activeItemIndex: PropTypes.number.isRequired,
  onItemChange: PropTypes.func.isRequired,
};

export default SlideDots;
