const express = require('express')

const router = express.Router();
const ctrl = require('../controllers/game')

router.route('/').get(ctrl.getAllGames)

module.exports = router