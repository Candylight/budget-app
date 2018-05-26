const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IncomeSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  amount: { type: Number, default: 0 },
  is_recurring: { type: Boolean, default: false },
  recurring_date: Date,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Income', IncomeSchema);
