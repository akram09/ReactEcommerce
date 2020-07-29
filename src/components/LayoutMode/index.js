import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './index.scss';

function LayoutMode(props) {
  return (
    <div
      className="layout-mode"
      onClick={() => props.onClick(props.itemsNumber)}
    >
      {_.range(props.itemsNumber).map((i) => (
        <div
          key={i}
          className={`layout-mode__item ${
            props.isActive && 'layout-mode__item--active'
          }`}
        />
      ))}
    </div>
  );
}

LayoutMode.propTypes = {
  itemsNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LayoutMode;
