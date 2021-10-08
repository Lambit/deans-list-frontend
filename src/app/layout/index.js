import React from 'react';
import Header from './header/Navigation';
import Footer from './footer/footer';
import './styles.css';

export default function Layout({ children, logout }) {
  return (
    <div className='__dml container'>
      <Header logout={logout} />
      {children}
      <Footer />
    </div>
  );
}