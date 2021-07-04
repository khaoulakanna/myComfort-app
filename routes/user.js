const router = require("express").Router();

const userControllers = require('../controllers/user');

router.post('/user', userControllers.postUserData);

module.exports = router;