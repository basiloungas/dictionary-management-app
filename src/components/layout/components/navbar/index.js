import React from 'react';
import { Link } from 'react-router-dom'

export default ({title}) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">{title}</Link>
      </div>
    </div>
  </nav>
);
