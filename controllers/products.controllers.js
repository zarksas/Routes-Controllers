module.exports.productsController = {
    getProducts: (req, res) => {
        res.send('Hello World')
    },

    getProductsById: (res, req) => {
        res.json('найден продукт с таким id:' + req.params)
    },

    postProducts: (req, res) => {
        res.json('добавить продукт')
    },

    deleteProductsById: (req, res) => {
        res.json('удалить прдукт с таким id:' + req.params)
    },
}





