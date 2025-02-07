const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  client: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Paid', 'Unpaid'], required: true }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);