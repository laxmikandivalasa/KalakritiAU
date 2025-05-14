const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your own MongoDB URI
mongoose.connect("mongodb://localhost:27017/Kalakriti", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => {
  console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  });
  
  

// Define schema and model
const cartItemSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: String,
  image: String,
  description: String,
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

// Import auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Start server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
