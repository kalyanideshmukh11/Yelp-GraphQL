const express = require('express');

const router = express.Router();
const { checkAuth } = require('../../middleware/auth');
const kafka = require('../../../kafka/client');

router.post('/', checkAuth, async (req, res) => {
    req.body.user = req.user;
    kafka.make_request('company_job', req.body, (err, results) => {        
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                job: results,
            });
            res.end();
        }
    });
});

router.get('/all', checkAuth, async (req, res) => {
    let payload = {query: req.query, user: req.user};
    kafka.make_request('company_jobs', payload, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                jobs: results,
            });
            res.end();
        }
    });
});

router.get('/students', checkAuth, async (req, res) => {
    kafka.make_request('company_students', req.query, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                students: results,
            });
            res.end();
        }
    });
});

module.exports = router;
