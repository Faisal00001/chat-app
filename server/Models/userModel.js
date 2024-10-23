const moongoose = require("mongoose")

const userSchema = new moongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: { type: String, required: true, minlength: 3, maxlength: 200, unique: true },
    password: { type: String, required: true, minlength: 3, maxlength: 1024 },


}, {
    timestamps: true
})
// model give method to save and retrive data in database

const userModel = moongoose.model("User", userSchema)
module.exports = userModel