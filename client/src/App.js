import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"; // Use the actual Home.jsx page you created

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
