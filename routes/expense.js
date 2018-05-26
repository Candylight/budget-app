const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Expense = require('../models/Expense.js');

/* GET ALL Expense */
router.get('/', (req, res, next) => {
  Expense.find((err, expenses) => {
    if (err) return next(err);
    res.json(expenses);
  });
});

/* GET SINGLE Expense BY ID */
router.get('/:id', (req, res, next) => {
  Expense.findById(req.params.id, (err, expense) => {
    if (err) return next(err);
    res.json(expense);
  });
});

/* SAVE Expense */
router.post('/', (req, res, next) => {
  Expense.create(req.body, (err, expense) => {
    if (err) return next(err);
    res.json(expense);
  });
});

/* UPDATE Expense */
router.put('/:id', (req, res, next) => {
  Expense.findByIdAndUpdate(req.params.id, req.body, (err, expense) => {
    if (err) return next(err);
    res.json(expense);
  });
});

/* DELETE Expense */
router.delete('/:id', (req, res, next) => {
  Expense.findByIdAndRemove(req.params.id, req.body, (err, expense) => {
    if (err) return next(err);
    res.json(expense);
  });
});

module.exports = router;
