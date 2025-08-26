const express = require('express');
const router = express.Router();
const { addSchool, listSchools } = require('../controllers/schoolsController');

// POST /api/addSchool
router.post('/addSchool', addSchool);

// GET /api/listSchools?lat=...&lng=...
router.get('/listSchools', listSchools);

module.exports = router;
