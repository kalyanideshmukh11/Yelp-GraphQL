const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const kafka = require('../../../kafka/client');

auth();

router.post('/login', async (req, res) => {
    kafka.make_request('customer_login', req.body, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                customer: results,
            });
            res.end();
        }
    });
});

router.post('/signup', async (req, res) => {
    kafka.make_request('customer_signup', req.body, (err, results) => {
        if (err) {
          console.log('Inside err');
          res.json({
            status: 'error',
            msg: 'System Error, Try Again.',
          });
        } else {
          console.log('Inside else');
          res.json({
            token: results,
          });
    
          res.end();
        }
    });
});

module.exports = router;
