import React from 'react';
import {Link} from 'react-router-dom';

export default ({to, title, subtitle, children}) => (
  <Link to={to} className="list-group-item clearfix">
    <h4 className="list-group-item-heading">{title}</h4>
    <p className="list-group-item-text">{subtitle}</p>
    {children}
  </Link>
);
