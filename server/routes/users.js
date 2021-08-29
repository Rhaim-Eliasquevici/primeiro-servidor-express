var express = require('express');
const controller = require('../controllers/users');
var router = express.Router();
var userController = require('../controllers/users')

/* GET users listing. */
router.get('/', controller.index)

module.exports = router;
