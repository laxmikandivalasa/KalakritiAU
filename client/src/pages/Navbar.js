import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff3ef',
    borderBottom: '2px solid #ffe0b2',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height:'89px',
    width: '100%',
    zIndex: 1000,
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  };

  const brandStyle = {
    fontSize: '2.5rem',
    fontWeight: 600,
    color: '#B22222'
  };

  const navLinks = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    fontSize:'1.4rem'
  };

  const link = {
    textDecoration: 'none',
    color: '#2b1b16',
    fontWeight: 500
  };

  const buttonOutline = {
    ...link,
    border: '2px solid maroon',
    borderRadius: '8px',
    padding: '8px 14px',
    backgroundColor: 'maroon',
    color: 'beige'
  };

  const buttonPrimary = {
    ...link,
    border: '2px solid maroon',
    borderRadius: '8px',
    padding: '8px 14px',
    backgroundColor: 'maroon',
    color: 'beige'
  };

  const buttonCart = {
    ...link,
    fontSize: '1.2rem',
    backgroundColor: '#ffd2a1',
    padding: '8px 12px',
    borderRadius: '8px',
    color: '#000'
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#fff8f5' }}>
      <nav style={navStyle}>
        <div style={brandStyle}>🎨 KALAKRITI</div>
        <ul style={navLinks}>
          <li><Link to="/" style={link}>Home</Link></li>
          <li><Link to="/contact" style={link}>Contact</Link></li>
          <li><Link to="/dashboard" style={link}>Dashboard</Link></li>
          <li><Link to="/product" style={link}>Product</Link></li>
          <li><Link to="/login" style={buttonOutline}>Login</Link></li>
          <li><Link to="/signup" style={buttonPrimary}>Signup</Link></li>
          <li><Link to="/cart" style={buttonCart}>🛒</Link></li>
        </ul>
      </nav>

      {/* Padding to prevent content being hidden behind fixed navbar */}
      <div style={{ paddingTop: '90px' }}>
        <Outlet />
      </div>
    </div>
  );
}
