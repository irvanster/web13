const express = require("express"); //import
const router = express();

//import route
const productRoute = require('./product.route')
const authRoute = require('./auth.route')
//end import route



router.get('/', (req, res)=> {
    return res.send('backend for coffe shop')
})
router.use('/products', productRoute)
router.use('/auth', authRoute)
// router.use('/users', userRoute)



module.exports = router //export, biar bisa diakses oleh file lain melalui require