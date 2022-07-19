const express = require('express')

const router = express.Router();
const ctrl = require('../controllers/user')

router.route('/:id').get(ctrl.getUserById).delete(ctrl.deleteUser).patch(ctrl.setIsUserOnline)
router.route('/new').post(ctrl.createUser)
router.route('/').get(ctrl.getAllUsers)
router.route('/active').get(ctrl.getAllActiveUsers)

module.exports = router 