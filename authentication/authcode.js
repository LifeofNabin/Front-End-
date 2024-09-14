const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

const users = [];  // Example user data (in memory, but use a DB in production)

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key';

// Register route (to register new users)
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user in memory (use DB in production)
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered');
});

// Login route (authentication)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(400).send('Invalid credentials');
    }

    // Compare password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Invalid credentials');
    }

    // Create JWT token
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Protected route (only accessible with valid token)
app.get('/protected', authenticateToken, (req, res) => {
    res.send(`Hello ${req.user.username}, you are authenticated!`);
});

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Token is required');
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send('Invalid token');
        }

        req.user = user; // Attach the user to the request object
        next();
    });
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
