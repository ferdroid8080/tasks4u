import React from 'react';

function Button({ children, ...props }) {
  let classes = [];
  if (props.primary) {
    classes.push('Button--primary');
  }
  if (props.rounded) {
    classes.push('Button--rounded');
  }

  return (
    <button className={`Button ${classes.join(' ')}`}>
      {children}
    </button>
  );
}

export default Button;
