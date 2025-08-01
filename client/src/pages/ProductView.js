import React, { useState } from "react";

// Sample Product Data
const products = [
  // 🎨 Paintings
  {
    id: 1,
    name: "Sunset Canvas",
    type: "Painting",
    price: "$200",
    image: "/assets/products/paint1.jpeg",
    description: "A vibrant painting of a sunset.",
  },
  {
    id: 2,
    name: "Village Scene",
    type: "Painting",
    price: "$250",
    image: "/assets/products/paint2.jpeg",
    description: "Traditional Indian village artwork.",
  },
  // {
  //   id: 3,
  //   name: "Abstract Fusion",
  //   type: "Painting",
  //   price: "$180",
  //   image: "/assets/products/painting3.jpg",
  //   description: "Modern art abstract painting."
  // },
  // {
  //   id: 4,
  //   name: "Floral Beauty",
  //   type: "Painting",
  //   price: "$220",
  //   image: "/assets/products/painting4.jpg",
  //   description: "A floral oil painting on canvas."
  // },
  // {
  //   id: 5,
  //   name: "Mountain View",
  //   type: "Painting",
  //   price: "$270",
  //   image: "/assets/products/painting5.jpg",
  //   description: "Scenic mountain landscape."
  // },

  // 🧵 Textiles
  {
    id: 6,
    name: "Handloom Saree",
    type: "Textile",
    price: "$150",
    image: "/assets/products/textile1.jpeg",
    description: "Traditional handwoven saree.",
  },
  {
    id: 7,
    name: "Block Print Dupatta",
    type: "Textile",
    price: "$120",
    image: "/assets/products/textile2.jpeg",
    description: "Cotton dupatta with block prints.",
  },
  // {
  //   id: 8,
  //   name: "Kalamkari Fabric",
  //   type: "Textile",
  //   price: "$180",
  //   image: "/assets/products/textile3.jpg",
  //   description: "Famous Kalamkari printed fabric."
  // },
  // {
  //   id: 9,
  //   name: "Silk Shawl",
  //   type: "Textile",
  //   price: "$200",
  //   image: "/assets/products/textile4.jpg",
  //   description: "Pure silk embroidered shawl."
  // },
  // {
  //   id: 10,
  //   name: "Tribal Print Wrap",
  //   type: "Textile",
  //   price: "$130",
  //   image: "/assets/products/textile5.jpg",
  //   description: "Wrap with tribal patterns."
  // },

  // 🏺 Pottery
  {
    id: 11,
    name: "Blue Ceramic Vase",
    type: "Pottery",
    price: "$300",
    image: "/assets/products/pot1.jpeg",
    description: "Handcrafted ceramic blue vase.",
  },
  {
    id: 12,
    name: "Terracotta Lamp",
    type: "Pottery",
    price: "$180",
    image: "/assets/products/pot2.jpeg",
    description: "Rustic terracotta oil lamp.",
  },
  // {
  //   id: 13,
  //   name: "Clay Bowl Set",
  //   type: "Pottery",
  //   price: "$160",
  //   image: "/assets/products/pottery3.jpg",
  //   description: "Hand-painted clay bowls (set of 3)."
  // },
  // {
  //   id: 14,
  //   name: "Earthen Pot",
  //   type: "Pottery",
  //   price: "$140",
  //   image: "/assets/products/pottery4.jpg",
  //   description: "Earthen pot for kitchen use."
  // },
  // {
  //   id: 15,
  //   name: "Decorative Planter",
  //   type: "Pottery",
  //   price: "$220",
  //   image: "/assets/products/pottery5.jpg",
  //   description: "Painted pot for plants."
  // },

  // 💍 Jewelry
  {
    id: 16,
    name: "Oxidized Necklace",
    type: "Jewelry",
    price: "$100",
    image: "/assets/products/jewelry1.jpeg",
    description: "Ethnic oxidized silver necklace.",
  },
  {
    id: 17,
    name: "Beaded Earrings",
    type: "Jewelry",
    price: "$80",
    image: "/assets/products/jewelry2.jpeg",
    description: "Hand-beaded dangler earrings.",
  },
  // {
  //   id: 18,
  //   name: "Terracotta Pendant",
  //   type: "Jewelry",
  //   price: "$90",
  //   image: "/assets/products/jewelry3.jpg",
  //   description: "Terracotta handmade jewelry."
  // },
  // {
  //   id: 19,
  //   name: "Kundan Set",
  //   type: "Jewelry",
  //   price: "$150",
  //   image: "/assets/products/jewelry4.jpg",
  //   description: "Royal kundan work necklace set."
  // },
  // {
  //   id: 20,
  //   name: "Tribal Bracelet",
  //   type: "Jewelry",
  //   price: "$70",
  //   image: "/assets/products/jewelry5.jpg",
  //   description: "Tribal design bracelet."
  // },

  // 🪵 Woodwork
  {
    id: 21,
    name: "Wall Hanging Elephant",
    type: "Woodwork",
    price: "$250",
    image: "/assets/products/wood1.jpeg",
    description: "Wooden carved elephant wall decor.",
  },
  {
    id: 22,
    name: "Wooden Jewelry Box",
    type: "Woodwork",
    price: "$200",
    image: "/assets/products/wood2.jpeg",
    description: "Handcrafted jewelry storage box.",
  },
  // {
  //   id: 23,
  //   name: "Mini Temple",
  //   type: "Woodwork",
  //   price: "$300",
  //   image: "/assets/products/woodwork3.jpg",
  //   description: "Small puja mandir for home."
  // },
  // {
  //   id: 24,
  //   name: "Pen Stand",
  //   type: "Woodwork",
  //   price: "$90",
  //   image: "/assets/products/woodwork4.jpg",
  //   description: "Carved wooden pen holder."
  // },
  // {
  //   id: 25,
  //   name: "Peacock Statue",
  //   type: "Woodwork",
  //   price: "$220",
  //   image: "/assets/products/woodwork5.jpg",
  //   description: "Peacock-shaped sculpture in wood."
  // }
];

const ProductView = () => {
  const [addedMessageId, setAddedMessageId] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    price: "",
    category: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("kalakrithiCart", JSON.stringify(updatedCart));

    // Show the "added" message
    setAddedMessageId(product.id);
    setTimeout(() => setAddedMessageId(null), 2000); // Hide after 2 seconds

    console.log("Cart:", [...cartItems, product]);
    // In real app, make an API call to store in MongoDB here
  };
  // Filter products based on the filters
  const filteredProducts = products.filter((product) => {
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
            <img
              src={product.image}
              alt={product.name}
              style={productImageStyle}
            />
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
              {addedMessageId === product.id && (
                <p
                  style={{
                    color: "green",
                    marginTop: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  ✅ Added to cart!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  gap: "2rem",
  backgroundColor: "#fef1f1",
  padding: "2rem",
};

const filterSectionStyle = {
  flex: 1,
  backgroundColor: "maroon",
  padding: "1.5rem",
  borderRadius: "8px",
  color: "white",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const filterGroupStyle = {
  marginBottom: "1rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  marginTop: "0.5rem",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const selectStyle = {
  width: "100%",
  padding: "0.8rem",
  marginTop: "0.5rem",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const productCardsSectionStyle = {
  flex: 2,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "2rem",
  padding: "0 1rem",
};

const productCardStyle = {
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  cursor: "pointer",
};

const productImageStyle = {
  width: "100%",
  borderRadius: "8px",
  marginBottom: "1rem",
};

const cardContentStyle = {
  textAlign: "center",
};

const productNameStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const productTypeStyle = {
  fontSize: "1rem",
  color: "#777",
  marginBottom: "0.5rem",
};

const productPriceStyle = {
  fontSize: "1.2rem",
  color: "#B22222",
  marginBottom: "0.5rem",
};

const productDescriptionStyle = {
  fontSize: "0.9rem",
  color: "#555",
};

const addToCartButtonStyle = {
  backgroundColor: "#B22222",
  color: "white",
  padding: "0.6rem 1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "0.5rem",
};
export default ProductView;
