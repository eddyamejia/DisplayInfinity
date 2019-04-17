import React from 'react';
import PropTypes from 'prop-types';
import GradientView from 'react-native-linear-gradient';

import { colors } from 'configs';

function Gradient({ children, ...props }) {
  return <GradientView {...props}>{children}</GradientView>;
}

Gradient.propTypes = {
  children: PropTypes.any.isRequired,
  colors: PropTypes.array,
};

Gradient.defaultProps = {
  colors: [colors.accent.string(), colors.accent.string()],
};

export default Gradient;
