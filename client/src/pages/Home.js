import React, { useState, useEffect } from 'react';

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
  const [index, setIndex] = useState(0);
  const categories = [
    { image: '/images/pot.jpeg', name: 'Painting' },
    { image: '/images/textile.jpeg', name: 'Textiles' },
    { image: '/images/wood.jpeg', name: 'Woodwork' },
    { image: '/images/paint.jpeg', name: 'Pottery' },
    { image: '/images/jewel.jpeg', name: 'Jewelry' },
    { image: '/images/decor.jpeg', name: 'Decor' }
  ];
  
  
  useAutoSlideAndReveal(setIndex, categories);

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


      {/* 2. Popular Categories */}{/* 2. Popular Categories */}
<section className="fade-in" style={{ backgroundColor: 'white', padding: '2rem', textAlign: 'center' }}>
  <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Popular Categories</h2>

  <div style={{ overflow: 'hidden', position: 'relative', maxWidth: '100%', margin: 'auto' }}>
    <div
      style={{
        display: 'flex',
        animation: 'slide 20s linear infinite',
        width: 'calc(200% + 1rem)',
      }}
    >
      {[...categories, ...categories].map(({ image, name }, i) => (
        <div
          key={name + i}
          style={{
            flex: '0 0 25%',
            padding: '1rem',
            boxSizing: 'border-box',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            borderRadius: '12px',
            backgroundColor: '#f5f5f5',
            margin: '0.5rem',
            cursor: 'pointer'
          }}
          // onMouseEnter={(e) => {
          //   e.currentTarget.style.backgroundColor = '#800000';
          //   e.currentTarget.style.color = 'white';
          //   e.currentTarget.style.transform = 'scale(1.05)';
          // }}
          // onMouseLeave={(e) => {
          //   e.currentTarget.style.backgroundColor = '#f5f5f5';
          //   e.currentTarget.style.color = 'black';
          //   e.currentTarget.style.transform = 'scale(1)';
          // }}
        >
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <h5 style={{ marginTop: '0.5rem' }}>{name}</h5>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* 3. Featured Artworks */}
      <section className="fade-in" style={section('maroon')}>
  <h2 style={{ ...title, color: 'beige' }}>Featured Artworks</h2>
  <div style={{ ...grid, marginTop: '2rem' }}>
    {[1, 2, 3].map(id => (
      <div key={id} className="art-card" style={card}>
        <img
          src={`/featurepro/feapro${id}.jpeg`}
          alt={`Art Piece ${id}`}
          style={imgStyle}
        />
        <h4 style={{ color: 'maroon' }}>Art Piece {id}</h4>
        <p style={{ color: 'black' }}>Made with heart and heritage.</p>
        <button style={{ ...buttonCart, backgroundColor: 'maroon', color: 'beige' }}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>



      {/* 4. About Us */}
      <section className="fade-in" style={section('beige')}>
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
  padding: '8rem 1rem',
  transition: 'all 0.6s ease-in-out'
});

const title = {
  textAlign: 'center',
  fontSize: '2.2rem',
  marginBottom: '3rem',
  color: '#4a312c',
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
  justifyItems: 'center',
  color: 'beige',
};

const tile = {
  background: 'rgb(128, 0, 0)',
  padding: '1.5rem',
  borderRadius: '16px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  cursor: 'pointer',
  width: '180px', // ← Increased width
};

const iconStyle = {
  fontSize: '2.5rem',
  marginBottom: '0.5rem'
};

const card = {
  background: 'beige',
  padding: '1rem',
  borderRadius: '16px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
  transition: 'transform 0.3s',
  textAlign: 'center',
  width: '300px',
};

const imgStyle = {
  width: '50%',
  borderRadius: '12px',
  marginBottom: '1rem',
  boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
};

const footer = {
  backgroundColor: 'maroon',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center'
};



const useAutoSlideAndReveal = (setIndex, categories) => {
  useEffect(() => {
    // Reveal animation
    const reveals = document.querySelectorAll(".fade-in");
    reveals.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        el.style.transition = "all 0.6s ease";
      }, 300 * i);
    });

    // Auto slide every 3 seconds
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % (categories.length - 3));
    }, 3000);

    return () => clearInterval(timer);
  }, []);
};

export default Home;
