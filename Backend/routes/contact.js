const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  res.status(201).json({ message: 'Message received successfully.' });
});

module.exports = router;
