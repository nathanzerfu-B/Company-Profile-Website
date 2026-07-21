const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const portfolioData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'Portfolio.json'), 'utf-8')
);

router.get('/', (req, res) => {
  const data = portfolioData[0];
  res.status(200).json(data);
});

module.exports = router;
