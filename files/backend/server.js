const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch(err => console.log(err));

// Routes
app.use('/api/invoices', require('./routes/invoiceRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});