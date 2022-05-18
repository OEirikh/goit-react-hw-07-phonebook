import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, text, onDelete, disabled, id }) {
  return (
    <button type={type} onClick={() => onDelete(id)} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  }),
};
