const express = require('express')

const router = express.Router();
const ctrl = require('../controllers/user')

router.route('/:id').get(ctrl.getUserById)
router.route('/new').post(ctrl.createUser)

module.exports = router