const express = require("express");
const formUpload = require("../../helper/formUpload");
const verifyToken = require("../../helper/verifyToken");
const router = express();

//import controller
const productController = require('../controller/product.controller')

router.get('/', productController.get)
router.get('/:id', productController.getDetail)
router.post('/', verifyToken, formUpload.single('img'), productController.add)
// router.put('/', productController.update)
router.patch('/:id', verifyToken, formUpload.single('img'), productController.update)
router.delete('/:id', verifyToken, productController.remove)

// delete //remove

// ketika kita update data, image yang tadinya ada, itu tidak boleh hilang
//ketika kita update image, maka image yang ada di data tersebut akan terupdate.
//ketika kita update, ada image sebelumnya -> itu hapus -> di replace
//ketika kita hapus products, maka harusnya image tersebut akan terhapus di folder itu
module.exports = router