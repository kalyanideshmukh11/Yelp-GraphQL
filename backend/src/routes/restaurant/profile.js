const express = require('express');
const router = express.Router();
const kafka = require('../../../kafka/client');
const { checkAuth } = require('../../middleware/auth');
const Restaurant = require('../../models/restaurant');

router.get('/details', checkAuth, async (req, res) => {
    let id;
    if(req.query && req.query.viewId) {
        id = req.query.viewId;
    } else {
        id = req.user._id;
    }
    kafka.make_request('restaurant_details', {id}, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                restaurantInfo: results,
            });
            res.end();
        }
    });
});

router.post('/details', checkAuth, async (req, res) => {
    req.body.id = req.user._id;
    kafka.make_request('restaurant_info', req.body, (err, results) => {
        if (err) {
            console.log('Inside err');
            res.json({
                status: 'error',
                msg: 'System Error, Try Again.',
            });
        } else {
            console.log('Inside else');
            res.json({
                restaurantInfo: results,
            });
            res.end();
        }
    });
});
module.exports = router;