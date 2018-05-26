const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BudgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  account_total: { type: Number, default: 0 },
  amount_to_keep: { type: Number, default: 0 },
  goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],
  incomes: [{ type: Schema.Types.ObjectId, ref: 'Income' }],
  expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Budget', BudgetSchema);
