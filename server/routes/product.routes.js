const ProductController = require('../controllers/product.controller')

module.exports = (app) => {

    //Create
    app.post('/api/products/new', ProductController.createProduct)

    //Read all
    app.get('/api/products', ProductController.allProducts)

    //Read one
    app.get('/api/products/:id', ProductController.oneProduct)

    //Update 
    app.put('/api/products/update/:id', ProductController.updateProduct)

    //Delete one
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}