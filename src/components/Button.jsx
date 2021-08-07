import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, ...props }) {
  let classes = [];
  if (props.primary) {
    classes.push('Button--primary');
  }
  if (props.rounded) {
    classes.push('rounded');
  }

  let component = (
    <button className={`Button ${classes.join(' ')}`}>
      {children}
    </button>
  );

  if (props.link) {
    component = <Link className={`Button ${classes.join(' ')}`} to={props.to}>{children}</Link>
  }

  return component;
}

export default Button;
