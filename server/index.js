const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const moongoose = require("mongoose")
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI;
const userRoute = require("./Routes/userRoutes");
// middle ware
app.use(express.json())
app.use(cors())
app.use('/api/users', userRoute)

app.get("/", (req, res) => {
    res.send('Welcome to our Chat APIs..')
})
app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})
moongoose.connect(uri).then(() => console.log("MongoDB connection established")).catch(error => console.log("MongoDB connection failed ", error.message))
