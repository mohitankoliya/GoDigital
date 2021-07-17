const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/auth');
const restaurants = require('../controllers/restaurant.controller')
const superAdmin = require('../controllers/superadmin.controller')
const user = require('../controllers/user.controller')
const ifsubcriptions = require('../middlewares/existsubcriptions')

//restaurant api
router.route('/restaurants/login').post(restaurants.login)
router.route('/restaurants/menu').post(checkAuth, restaurants.menu)
router.route('/restaurants/todayorder').get(checkAuth, restaurants.todayorder)
router.route('/restaurants/change_order_status').post(checkAuth, restaurants.changeOrderStatus)
router.route('/restaurants/today_order_details').get(checkAuth, restaurants.todayOrderDetails)
router.route('/restaurants/create_dining_table_qrcode/:count').get(checkAuth, restaurants.createDiningTableQrcode)
router.route('/restaurants/profile_update').post(checkAuth, restaurants.profileUpdate)
router.route('/restaurants/imps').post(checkAuth, restaurants.imps)
router.route('/restaurants/neworder').get(checkAuth, restaurants.newOrder)
router.route('/restaurants/subcription').post(checkAuth, restaurants.subcription)
router.route('/restaurants/image_upload').post(checkAuth, restaurants.uploadImage)
router.route('/restaurants/all_qrcode').get(checkAuth, restaurants.qrGenerator)
router.route('/restaurants/graph').get(checkAuth, restaurants.graph)
router.route('/restaurants/forgotpassword').post(restaurants.createOtp)
router.route('/restaurants/verifyotp').post(restaurants.verifyOTP)
router.route('/restaurants/newpassword').post(restaurants.newPassword)

//superadmin api
router.route('/superadmin/login').post(superAdmin.login)
router.route('/superadmin/dashboardCount').get(checkAuth, superAdmin.dashboard)
router.route('/superadmin/create_rest_account').post(checkAuth, superAdmin.createRestAccount)
router.route('/superadmin/restaurants_table').get(checkAuth, superAdmin.restaurantsTable)
router.route('/superadmin/rastaurent_detail').get(checkAuth, superAdmin.rastaurentDetail)
router.route('/superadmin/restaurant_subcription').get(checkAuth, superAdmin.restaurantSubcription)
router.route('/superadmin/restaurant_subcription_modify').get(checkAuth, superAdmin.restaurantSubcriptionModify)
router.route('/superadmin/restaurant_status_table').get(checkAuth, superAdmin.restaurantStatusTable)
router.route('/superadmin/restaurant_generate_receipt_table').get(checkAuth, superAdmin.restaurantGenerateReceiptTable)
router.route('/superadmin/generate_receipt').get(checkAuth, superAdmin.generateReceipt)
router.route('/superadmin/salesacoount').post(checkAuth, superAdmin.createSaleAccount)

//user api
router.route('/users/restaurant_menu').get(ifsubcriptions, user.restaurantMenu)
router.route('/users/order').post(user.order)


module.exports = router;

