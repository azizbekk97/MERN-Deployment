// establish connection to our database server
const mongoose = require("mongoose")

const dbName = process.env.ATLAS_DATABASE
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${pw}@azizbekk97.a30w0a3.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Establish a CommLynk to Ds Port Maintenance ${dbName}`))
.catch((err) => console.log(`Abort the Rebel Alliance is boarding the base station!`, err))
