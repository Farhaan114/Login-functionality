const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const verifyToken = require('./authMiddleware');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});



// Rate limiting to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
});
app.use('/api', limiter);

// Test route
app.get('/test', (req, res) => {
  res.send("Test route works!");
});

// Register Route
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const checkUserSql = 'SELECT * FROM users WHERE username = ?';
  db.query(checkUserSql, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length > 0) return res.status(400).json({ error: 'Username already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const insertUserSql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(insertUserSql, [username, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to register user' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});


// Login Route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    // Check if the user exists
    if (results.length === 0) {
      // Log the failed login attempt
      const logSql = 'INSERT INTO login_attempts (user_id, timestamp, status) VALUES (?, NOW(), ?)';
      db.query(logSql, [null, 'failure'], (err) => {
        if (err) console.error('Login logging failed for user not found');
      });

      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Log the failed login attempt
      const logSql = 'INSERT INTO login_attempts (user_id, timestamp, status) VALUES (?, NOW(), ?)';
      db.query(logSql, [user.id, 'failure'], (err) => {
        if (err) console.error('Login logging failed for incorrect password');
      });

      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Successful login
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

    // Log the successful login
    const logSql = 'INSERT INTO login_attempts (user_id, timestamp, status) VALUES (?, NOW(), ?)';
    db.query(logSql, [user.id, 'success'], (err) => {
      if (err) console.error('Login logging failed for success');
    });
  });
});


//protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: "Protected data accessed successfully", userId: req.userId });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
