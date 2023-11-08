const express = require('express');
const controller = require('../controllers/users.controller');
//const { verifyToken } = require('../middlewares/authentication');

const router = express.Router();

router.get('/',  controller.hello);
router.post('/login',  controller.login);

module.exports = router;