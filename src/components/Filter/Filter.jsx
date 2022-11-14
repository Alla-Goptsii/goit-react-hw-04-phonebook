import React from 'react';
import { Label } from './Filter.styled.js';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />{' '}
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
