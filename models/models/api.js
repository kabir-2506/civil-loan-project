const express = require('express');
const router = express.Router();

const Service = require('../models/Service');
const Request = require('../models/Request');
const Member = require('../models/Member');

// Route 1: Get all services
router.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route 2: Get a service by type
router.get('/service/:type', async (req, res) => {
    try {
        const service = await Service.findOne({ type: req.params.type });
        res.json(service);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route 3: Apply for a service
router.post('/service/typeform', async (req, res) => {
    try {
        const newRequest = new Request(req.body);
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route 4: Add a new member
router.post('/member', async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route 5: Calculate interest amount
router.post('/service/calculate', (req, res) => {
    const { amt, tenure, type } = req.body;
    const interestRate = 10; // Example interest rate
    const interest = (amt * tenure * interestRate) / 100;
    res.json({ interest });
});

// Route 6: Update service details
router.put('/updateservice', async (req, res) => {
    try {
        const updated = await Service.findOneAndUpdate({ code: req.body.code }, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route 7: Update password
router.put('/updatepassword', async (req, res) => {
    try {
        const updated = await Member.findOneAndUpdate({ mobile: req.body.mobile }, { createpassword: req.body.createpassword }, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route 8: Delete a request
router.delete('/deleterequest', async (req, res) => {
    try {
        await Request.findOneAndDelete({ mobile: req.body.mobile });
        res.json({ message: 'Request deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route 9: Cancel membership
router.delete('/cancelmember', async (req, res) => {
    try {
        await Member.findOneAndDelete({ mobile: req.body.mobile });
        res.json({ message: 'Membership cancelled' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
