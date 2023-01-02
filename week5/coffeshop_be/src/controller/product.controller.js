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
        return productModel.add(req.body)
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