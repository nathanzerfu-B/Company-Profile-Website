const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const servicesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'Services.json'), 'utf-8')
);

router.get('/', (req, res) => {
  const data = servicesData[0];
  res.status(200).json(data);
});

module.exports = router;
