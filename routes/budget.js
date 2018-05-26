const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Budget = require('../models/Budget.js');

/* GET ALL Budget */
router.get('/', (req, res, next) => {
  Budget.find((err, budgets) => {
    if (err) return next(err);
    res.json(budgets);
  });
});

/* GET SINGLE Budget BY ID */
router.get('/:id', (req, res, next) => {
  Budget.findById(req.params.id, (err, budget) => {
    if (err) return next(err);
    res.json(budget);
  });
});

/* SAVE Budget */
router.post('/', (req, res, next) => {
  Budget.create(req.body, (err, budget) => {
    if (err) return next(err);
    res.json(budget);
  });
});

/* UPDATE Budget */
router.put('/:id', (req, res, next) => {
  Budget.findByIdAndUpdate(req.params.id, req.body, (err, budget) => {
    if (err) return next(err);
    res.json(budget);
  });
});

/* DELETE Budget */
router.delete('/:id', (req, res, next) => {
  Budget.findByIdAndRemove(req.params.id, req.body, (err, budget) => {
    if (err) return next(err);
    res.json(budget);
  });
});

module.exports = router;
