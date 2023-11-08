const express = require('express');
const controller = require('../controllers/businness.controller');
//const { verifyToken } = require('../middlewares/authentication');

const router = express.Router();

router.get('/',  controller.getBusiness);

module.exports = router;