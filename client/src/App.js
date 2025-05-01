import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Kalakriti</h1>
        <p>
          Discover and support India's creative talent through handmade products.
        </p>
        <div>
          <Link to="/shop" className="App-link">Shop Now</Link> |{" "}
          <Link to="/sell" className="App-link">Sell Your Art</Link>
        </div>
      </header>
    </div>
  );
}

function Shop() {
  return <h2>🛍️ Shop Page - Browse Handmade Products</h2>;
}

function Sell() {
  return <h2>🎨 Sell Page - List Your Creative Work</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
