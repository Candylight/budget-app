const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GoalSchema = new mongoose.Schema({
  name: String,
  description: String,
  cost: { type: Number, default: 0 },
  limit_date: { type: Date, default: Date.now },
  is_completed: { type: Boolean, default: false },
  percent_done: { type: Number, default: 0 },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Goal', GoalSchema);
