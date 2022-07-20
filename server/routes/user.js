const express = require('express')

const router = express.Router();
const ctrl = require('../controllers/user')

router.route('/active').get(ctrl.getAllActiveUsers)
router.route('/topUsers').get(ctrl.getTopFiveUsers)
router.route('/:id').get(ctrl.getUserById).delete(ctrl.deleteUser).patch(ctrl.setIsUserOnline)
router.route('/new').post(ctrl.createUser)
router.route('/').get(ctrl.getAllUsers)

module.exports = router 