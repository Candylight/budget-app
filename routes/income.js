const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Income = require('../models/Income.js');

/* GET ALL Income */
router.get('/', (req, res, next) => {
  Income.find((err, incomes) => {
    if (err) return next(err);
    res.json(incomes);
  });
});

/* GET SINGLE Income BY ID */
router.get('/:id', (req, res, next) => {
  Income.findById(req.params.id, (err, income) => {
    if (err) return next(err);
    res.json(income);
  });
});

/* SAVE Income */
router.post('/', (req, res, next) => {
  Income.create(req.body, (err, income) => {
    if (err) return next(err);
    res.json(income);
  });
});

/* UPDATE Income */
router.put('/:id', (req, res, next) => {
  Income.findByIdAndUpdate(req.params.id, req.body, (err, income) => {
    if (err) return next(err);
    res.json(income);
  });
});

/* DELETE Income */
router.delete('/:id', (req, res, next) => {
  Income.findByIdAndRemove(req.params.id, req.body, (err, income) => {
    if (err) return next(err);
    res.json(income);
  });
});

module.exports = router;
