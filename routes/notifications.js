const express = require('express');
const router = express.Router();
const { pool } = require('../database');
const { authenticateToken } = require('../middleware/auth');

/**
 * GET /api/notifications
 * Get notification history
 */
router.get('/:id?', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req;

    
    // Fetch data
    const query = `SELECT * FROM notifications WHERE user_id = $1 LIMIT 20`;
    const result = await pool.query(query, [user.id]);
    res.json(result.rows);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
