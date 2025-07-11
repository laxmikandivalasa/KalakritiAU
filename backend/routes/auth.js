const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @route POST /api/auth/signup
// @desc Register a new user
// @access Public
router.post('/signup', async (req, res) => {
try {
const {
fullName,
email,
gender,
dob,
mobileNumber,
state,
district,
area,
password,
confirmPassword,
} = req.body;

// Validate required fields
if (!fullName || !email || !password || !confirmPassword) {
  return res.status(400).json({ message: 'Please fill all required fields' });
}

// Check if passwords match
if (password !== confirmPassword) {
  return res.status(400).json({ message: 'Passwords do not match' });
}

// Check if user already exists
const existingUser = await User.findOne({ email });
if (existingUser) {
  return res.status(409).json({ message: 'User with this email already exists' });
}

// Hash the password
console.log("▶️ Raw password:", password);
const hashedPassword = await bcrypt.hash(password, 10);
console.log("🔐 Hashed password:", hashedPassword);


// Create new user
const newUser = new User({
  fullName,
  email,
  gender,
  dob,
  mobileNumber,
  state,
  district,
  area,
  password,
});

await newUser.save();

return res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
console.error('Signup error:', error);
return res.status(500).json({ message: 'Server error. Please try again later.' });
}
});

// @route POST /api/auth/login
// @desc Log in a user and return a token
// @access Public
// @route POST /api/auth/login
// @desc Log in a user and return a token
// @access Public
// POST /login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      console.log("Entered password:", password);
      console.log("Stored hashed password:", user.password);
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      console.log("Password match result:", isMatch);
  
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // res.status(200).json({ message: "Login successful", user });

      res.status(200).json({ 
        message: "Login successful", 
        user: {
          fullName: user.fullName,
          email: user.email,
          gender: user.gender,
          dob: user.dob,
          mobileNumber: user.mobileNumber,
          state: user.state,
          district: user.district,
          area: user.area
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  });
  



module.exports = router;