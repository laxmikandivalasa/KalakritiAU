import React, { useState } from "react";

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Painting 1",
    type: "Painting",
    price: "$200",
    image: "https://source.unsplash.com/200x200/?painting",
    description: "A beautiful abstract painting."
  },
  {
    id: 2,
    name: "Textile 1",
    type: "Textile",
    price: "$150",
    image: "https://source.unsplash.com/200x200/?textile",
    description: "Handwoven textile with intricate designs."
  },
  {
    id: 3,
    name: "Pottery 1",
    type: "Pottery",
    price: "$300",
    image: "https://source.unsplash.com/200x200/?pottery",
    description: "Handmade pottery, elegant and functional."
  },
  {
    id: 4,
    name: "Jewelry 1",
    type: "Jewelry",
    price: "$100",
    image: "https://source.unsplash.com/200x200/?jewelry",
    description: "Handcrafted jewelry with intricate details."
  },
  {
    id: 5,
    name: "Woodwork 1",
    type: "Woodwork",
    price: "$250",
    image: "https://source.unsplash.com/200x200/?woodwork",
    description: "Beautiful hand-carved wooden items."
  },
  {
    id: 1,
    name: "Painting 1",
    type: "Painting",
    price: "$200",
    image: "https://source.unsplash.com/200x200/?painting",
    description: "A beautiful abstract painting."
  },
  {
    id: 2,
    name: "Textile 1",
    type: "Textile",
    price: "$150",
    image: "https://source.unsplash.com/200x200/?textile",
    description: "Handwoven textile with intricate designs."
  },
  {
    id: 3,
    name: "Pottery 1",
    type: "Pottery",
    price: "$300",
    image: "https://source.unsplash.com/200x200/?pottery",
    description: "Handmade pottery, elegant and functional."
  },
  {
    id: 4,
    name: "Jewelry 1",
    type: "Jewelry",
    price: "$100",
    image: "https://source.unsplash.com/200x200/?jewelry",
    description: "Handcrafted jewelry with intricate details."
  },
  {
    id: 5,
    name: "Woodwork 1",
    type: "Woodwork",
    price: "$250",
    image: "https://source.unsplash.com/200x200/?woodwork",
    description: "Beautiful hand-carved wooden items."
  }
];

const ProductView = () => {
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    price: "",
    category: ""
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (product) => {
setCartItems([...cartItems, product]);
console.log("Cart:", [...cartItems, product]);
// In real app, make an API call to store in MongoDB here
};
  // Filter products based on the filters
  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      product.type.toLowerCase().includes(filters.type.toLowerCase()) &&
      product.price.toLowerCase().includes(filters.price.toLowerCase()) &&
      product.type.toLowerCase().includes(filters.category.toLowerCase())
    );
  });

  return (
    <div style={containerStyle}>
      {/* Filter Section */}
      <div style={filterSectionStyle}>
        <h3>Filter Products</h3>
        <div style={filterGroupStyle}>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Search by name"
            style={inputStyle}
          />
        </div>
        <div style={filterGroupStyle}>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            placeholder="Search by price"
            style={inputStyle}
          />
        </div>
        <div style={filterGroupStyle}>
          <label>Category:</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            style={selectStyle}
          >
            <option value="">Select Category</option>
            <option value="painting">Painting</option>
            <option value="textile">Textile</option>
            <option value="pottery">Pottery</option>
            <option value="jewelry">Jewelry</option>
            <option value="woodwork">Woodwork</option>
          </select>
        </div>
      </div>

      {/* Product Cards Section */}
      <div style={productCardsSectionStyle}>
        {filteredProducts.slice(0, 5).map((product) => (
          <div key={product.id} style={productCardStyle}>
            <img src={product.image} alt={product.name} style={productImageStyle} />
            <div style={cardContentStyle}>
              <h4 style={productNameStyle}>{product.name}</h4>
              <p style={productTypeStyle}>{product.type}</p>
              <p style={productPriceStyle}>{product.price}</p>
              <p style={productDescriptionStyle}>{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                style={addToCartButtonStyle}
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  gap: '2rem',
  backgroundColor: '#fef1f1',
  padding: '2rem'
};

const filterSectionStyle = {
  flex: 1,
  backgroundColor: 'maroon',
  padding: '1.5rem',
  borderRadius: '8px',
  color: 'white',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
};

const filterGroupStyle = {
  marginBottom: '1rem'
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  marginTop: '0.5rem',
  borderRadius: '8px',
  border: '1px solid #ddd'
};

const selectStyle = {
  width: '100%',
  padding: '0.8rem',
  marginTop: '0.5rem',
  borderRadius: '8px',
  border: '1px solid #ddd'
};

const productCardsSectionStyle = {
  flex: 2,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '2rem',
  padding: '0 1rem'
};

const productCardStyle = {
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  cursor: 'pointer'
};

const productImageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '1rem'
};

const cardContentStyle = {
  textAlign: 'center'
};

const productNameStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem'
};

const productTypeStyle = {
  fontSize: '1rem',
  color: '#777',
  marginBottom: '0.5rem'
};

const productPriceStyle = {
  fontSize: '1.2rem',
  color: '#B22222',
  marginBottom: '0.5rem'
};

const productDescriptionStyle = {
  fontSize: '0.9rem',
  color: '#555'
};

const addToCartButtonStyle = {
  backgroundColor: '#B22222',
  color: 'white',
  padding: '0.6rem 1rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '0.5rem'
  };
export default ProductView;
