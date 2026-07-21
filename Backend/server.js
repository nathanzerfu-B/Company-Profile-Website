const express = require('express');
const app = express();
const PORT = 3000;

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const servicesRoute = require('./routes/services');
const portfolioRoute = require('./routes/portfolio');
const contactRoute = require('./routes/contact');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Alzera API is running' });
});

app.use('/home', homeRoute);
app.use('/about', aboutRoute);
app.use('/services', servicesRoute);
app.use('/portfolio', portfolioRoute);
app.use('/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
