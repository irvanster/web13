const productModel = require("../model/product.model")

const productController = {
    get:(req, res)=> {
        // req.params
        // req.query
        // req.body
        return productModel.get(req.query)
        .then((result)=> {
            //next explore
            // return formResponse("succes", result, 200)
            // return formResponse({ message: "succes", data: result, status: 200 })
            return res.status(200).send({ message: "success", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    getDetail:(req, res)=> {

    },
    add:(req, res)=> {
        console.log(req.files)
        const request = {
            ...req.body,
            file: req.files, //uncomment if multiple
            // img: req.file.filename, //uncomment if single
            //depend on product.route, formUpload.single or formUpload.array
        }
        // console.log(req.files) //multiple
        // console.log(req.file) //(single)

        //
        //berarti kita mau bikin product yang banyak images, itu gimana?
        // 1. kita bikin 2-3 column untuk (img1, img2, img3)
        // 2. (RECOMMENDED) kita bikin table khusus untuk product_images
            //  ->id_image, id_product, name, alt_name, filename
            // -> ketika get product, join table dengan product images
        return productModel.add(request)
        .then((result)=> {
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    update:(req, res)=> {
        const request = {
            ...req.body,
            id: req.params.id,
        }
        return productModel.update(request)
        .then((result)=> {
            return res.status(201).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },
    remove:(req, res)=> {

    }, 
}



module.exports = productController




//next explore (dibikin di helper, dipisah filenya)
// const formResponse = (message, result, status)=> {
//     return res.status(status).send({
//         data: result,
//         message: result.message,
//         status: 200
//     })
// }