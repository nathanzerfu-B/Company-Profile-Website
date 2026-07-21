const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const aboutData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'Aboutus.json'), 'utf-8')
);

router.get('/', (req, res) => {
  const data = aboutData[0];
  res.status(200).json(data);
});

module.exports = router;
