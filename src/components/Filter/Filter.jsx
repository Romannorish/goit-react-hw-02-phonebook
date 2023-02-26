import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'components/Filter/Filter.styled'

export default function  Filter({ value, onChange }) {
  return (
    <Label>
      Find contact by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

