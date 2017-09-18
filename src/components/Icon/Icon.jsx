import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, className }) => <img src={require(`../../../assets/icons/${name}.svg`)} alt="name" className={className} />;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default Icon;

