const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/Category.js');

/* GET ALL Category */
router.get('/', (req, res, next) => {
  Category.find((err, categories) => {
    if (err) return next(err);
    res.json(categories);
  });
});

/* GET SINGLE Category BY ID */
router.get('/:id', (req, res, next) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) return next(err);
    res.json(category);
  });
});

/* SAVE Category */
router.post('/', (req, res, next) => {
  Category.create(req.body, (err, category) => {
    if (err) return next(err);
    res.json(category);
  });
});

/* UPDATE Category */
router.put('/:id', (req, res, next) => {
  Category.findByIdAndUpdate(req.params.id, req.body, (err, category) => {
    if (err) return next(err);
    res.json(category);
  });
});

/* DELETE Category */
router.delete('/:id', (req, res, next) => {
  Category.findByIdAndRemove(req.params.id, req.body, (err, category) => {
    if (err) return next(err);
    res.json(category);
  });
});

module.exports = router;
