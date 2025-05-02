import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".fade-in");
    reveals.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 300 * i);
    });
  }, []);
  //p, atri

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#2b1b16', backgroundColor: '#fff8f5' }}>


      {/* 1. Discover Section */}
      <section
        className="fade-in"
        style={{
          backgroundImage: "url('/finalbgkalakriti.png')", // Replace with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        <a
          href="/product"
          style={{
            ...buttonPrimary,
            padding: '0.8rem 1.5rem',
            fontSize: '1.3rem',
            backgroundColor: 'beige',
            color: 'maroon',
            textDecoration: 'none',
            fontWeight: 600,
            borderRadius: '0.5rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            marginLeft: '-50rem',
            marginTop: '15rem',
          }}
        >
          Explore Now
        </a>
      </section>


      {/* 2. Popular Categories */}
      <section className="fade-in" style={section('white')}>
        <h2 style={title}>Popular Categories</h2>
        <div style={grid}>
          {[
            ['🖌️', 'Painting'],
            ['🧵', 'Textiles'],
            ['🪵', 'Woodwork'],
            ['🏺', 'Pottery'],
            ['💍', 'Jewelry'],
            ['🪔', 'Decor']
          ].map(([icon, name]) => (
            <div key={name} style={tile}>
              <div style={iconStyle}>{icon}</div>
              <h5>{name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Artworks */}
      <section className="fade-in" style={section('#FF6347')}>
        <h2 style={title}>Featured Artworks</h2>
        <div style={grid}>
          {[1, 2, 3].map(id => (
            <div key={id} style={card}>
              <img
                src={`https://source.unsplash.com/400x30${id}/?handmade,art`}
                alt="Art"
                style={imgStyle}
              />
              <h4>Art Piece #{id}</h4>
              <p>Made with heart and heritage.</p>
              <button style={buttonCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. About Us */}
      <section className="fade-in" style={section('#FF4500')}>
        <h2 style={title}>About Kalakriti</h2>
        <p style={centerText}>
          Kalakriti gives voice to India's handmade legacy—connecting artists directly with admirers, and ensuring fair trade for all.
        </p>
      </section>

      {/* Footer */}
      <footer style={footer}>
        © 2025 Kalakriti | Crafted with tradition & heart ❤️
      </footer>
    </div>
  );
};

// Utility components & styles
const navStyle = {
  backgroundColor: '#fff3ef',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const brandStyle = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#B22222'
};

const navLinks = { display: 'flex', gap: '1rem', alignItems: 'center' };

const link = { textDecoration: 'none', color: '#2b1b16', fontWeight: 500 };

const buttonPrimary = {
  padding: '8px 14px',
  background: '#FF4500',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: '0.3s'
};

const buttonOutline = {
  ...buttonPrimary,
  background: 'transparent',
  color: '#FF4500',
  textDecoration: 'none',
  border: '2px solid beige'
};

const buttonCart = {
  ...buttonPrimary,
  background: '#ffd2a1',
  color: '#000',
  textDecoration: 'none',
};

const section = (bg) => ({
  backgroundColor: bg,
  padding: '3rem 1rem',
  transition: 'all 0.6s ease-in-out'
});

const title = {
  textAlign: 'center',
  fontSize: '2.2rem',
  marginBottom: '2rem',
  color: '#4a312c'
};

const centerText = {
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
  fontSize: '1rem'
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '2rem',
  justifyItems: 'center'
};

const tile = {
  background: '#fff',
  padding: '1.5rem',
  borderRadius: '16px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  cursor: 'pointer'
};

const iconStyle = {
  fontSize: '2.5rem',
  marginBottom: '0.5rem'
};

const card = {
  background: '#fff',
  padding: '1rem',
  borderRadius: '16px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
  transition: 'transform 0.3s',
  textAlign: 'center'
};

const imgStyle = {
  width: '100%',
  borderRadius: '12px',
  marginBottom: '1rem',
  boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
};

const footer = {
  backgroundColor: '#B22222',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center'
};

export default Home;
