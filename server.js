const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pg = require('pg');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});


// GET /api/users/me
// Get current user profile
app.get('/api/users/me', async (req, res) => {
  try {
    // TODO: Implement GET /api/users/me
    res.json({ message: 'Get current user profile', method: 'GET' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/users/me
// Update user profile
app.put('/api/users/me', async (req, res) => {
  try {
    // TODO: Implement PUT /api/users/me
    res.json({ message: 'Update user profile', method: 'PUT' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users/:id
// Get user public profile
app.get('/api/users/:id', async (req, res) => {
  try {
    // TODO: Implement GET /api/users/:id
    res.json({ message: 'Get user public profile', method: 'GET' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/notifications/subscribe
// Subscribe to notifications (WebSocket)
app.post('/api/notifications/subscribe', async (req, res) => {
  try {
    // TODO: Implement POST /api/notifications/subscribe
    res.json({ message: 'Subscribe to notifications (WebSocket)', method: 'POST' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/notifications
// Get notification history
app.get('/api/notifications', async (req, res) => {
  try {
    // TODO: Implement GET /api/notifications
    res.json({ message: 'Get notification history', method: 'GET' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/health
// API health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    // TODO: Implement GET /api/health
    res.json({ message: 'API health check endpoint', method: 'GET' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
