const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        // required: true,
    },
    dob: {
        type: Date,
         // required: true,
    },
    mobileNumber: {
        type: String,
        // required: true,
        match: /^[6-9]\d{9}$/, // Indian mobile format
    },
    state: {
        type: String,
       // required: true,
    },
    district: {
        type: String,
        // required: true,
    },
    area: {
        type: String,
   // required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    cart: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
        },
    ],
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);