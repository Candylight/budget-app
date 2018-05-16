const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Goal = require('../models/Goal.js');

/* GET ALL GOALS */
router.get('/', (req, res, next) => {
  Goal.find((err, goals) => {
    if (err) return next(err);
    res.json(goals);
  });
});

/* GET SINGLE GOAL BY ID */
router.get('/:id', (req, res, next) => {
  Goal.findById(req.params.id, (err, goal) => {
    if (err) return next(err);
    res.json(goal);
  });
});

/* SAVE GOAL */
router.post('/', (req, res, next) => {
  Goal.create(req.body, (err, goal) => {
    if (err) return next(err);
    res.json(goal);
  });
});

/* UPDATE GOAL */
router.put('/:id', (req, res, next) => {
  Goal.findByIdAndUpdate(req.params.id, req.body, (err, goal) => {
    if (err) return next(err);
    res.json(goal);
  });
});

/* DELETE GOAL */
router.delete('/:id', (req, res, next) => {
  Goal.findByIdAndRemove(req.params.id, req.body, (err, goal) => {
    if (err) return next(err);
    res.json(goal);
  });
});

module.exports = router;
