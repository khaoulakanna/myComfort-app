const router = require("express").Router();

const dataControllers = require('../controllers/data');

router.get('/data', (req, res, next)=> {
  console.log(res);
})

router.post('/data', dataControllers.postData);

module.exports = router;