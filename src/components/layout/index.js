import React from 'react';
import NavBar from './components/navbar';
import './style.css';

export default ({children}) => (
  <section>
    <NavBar title="Dictionary management Application" />
    <main className="container">
      {children}
    </main>
  </section>
);
