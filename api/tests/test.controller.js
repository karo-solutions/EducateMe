const express = require('express');
const router = express.Router();
const testService = require('./test.service');

// routes
router.post('/addResult', addResult);
router.post('/getUserResults', getUserResults);

module.exports = router;

function addResult(req, res, next) {

    testService.addResult(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getUserResults(req, res, next) {
    testService.getUserResults(req.body.username)
        .then(test => test ? res.json(test) : res.status(400).json({ message: 'ERROR' }))
        .catch(err => next(err));
}