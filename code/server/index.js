const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000; // Changed from 6001 to standard Express port

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/freelancing_platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  usertype: String
});

const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(cors());

// Simple registration
app.post('/register', async (req, res) => {
    const { username, email, password, usertype } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Create user
        const newUser = new User({ username, email, password, usertype });
        await newUser.save();

        res.json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            usertype: newUser.usertype
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Simple login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        // For prototype simplicity, accept any password
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Test endpoint
app.get('/test', (req, res) => {
    res.json({ message: 'Server working' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});