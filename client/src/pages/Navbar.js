import { Link , Outlet} from "react-router-dom";

export default function Navbar() {
  // Define styles here or import them from a CSS file or module
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff8f5',
    borderBottom: '1px solid #eee'
  };

  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  };

  const navLinks = {
    display: 'flex',
    alignItems: 'center'
  };

  const link = {
    textDecoration: 'none',
    color: '#2b1b16',
    padding: '0.5rem'
  };

  const buttonOutline = {
    ...link,
    border: '1px solid #2b1b16',
    borderRadius: '4px'
  };

  const buttonPrimary = {
    ...link,
    backgroundColor: '#2b1b16',
    color: 'white',
    borderRadius: '4px'
  };

  const buttonCart = {
    ...link,
    fontSize: '1.2rem'
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#fff8f5' }}>
      <nav style={navStyle}>
        <div style={brandStyle}>🎨 KALAKRITI</div>
        <div style={navLinks}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0, margin: 0 }}>
            <li><Link to="/" style={link}>Home</Link></li>
            {/* <li><Link to="/about" style={link}>About</Link></li> */}
            {/* <li><Link to="/contact" style={link}>Contact</Link></li> */}
            <li><Link to="/dashboard" style={link}>Dashboard</Link></li>
            <li><Link to="/login" style={buttonOutline}>Login</Link></li>
            <li><Link to="/signup" style={buttonPrimary}>Signup</Link></li>
            <li><Link to="/cart" style={buttonCart}>🛒</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}