const express = require("express")
const cors = require("cors")

const app = express()
require("dotenv").config()

const port = 8000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



require('./configs/mongoose.config')

const Routes = require('./routes/product.routes')
Routes(app)


app.listen(port, () => console.log(`You are on the page!!!, ${port}`))