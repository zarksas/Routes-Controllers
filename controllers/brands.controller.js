

module.exports.brandsController = {
    getBrands: (req, res) => {
        res.json('Brands')
    },

    postBrands: (req, res) => {
        res.json('newBrand')
    },

    deleteBrands: (req, res) => {
        res.json('delete Brands')
    }

}