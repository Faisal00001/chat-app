const moongoose = require("mongoose")
const chatSchema = new moongoose.Schema({
    members: Array
}, {
    timestamps: true
})
const chatModel = moongoose.model("Chat", chatSchema)
module.exports = chatModel