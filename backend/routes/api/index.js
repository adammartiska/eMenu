let router = require('express').Router();

router.use('/menu', require('./food-menu'));

module.exports = router;