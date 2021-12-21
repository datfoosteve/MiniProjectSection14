const router = require('express').Router();
const apiRoutes = require('./api');
const home-routes = require('../home-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
