const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authentication');


// Add the required routes
router.use('/auth', require('./auth'));

router.use('/consultants', authenticate, require('./consultants'));
router.use('/reviews', authenticate, require('./reviews'));
router.use('/users', authenticate, require('./users'));
router.use('/appointments', authenticate, require('./appointments'));


module.exports = router;