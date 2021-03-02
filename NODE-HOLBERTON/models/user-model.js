const { Schema, model } = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const userSchema = Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true,
        unique: true
    }
}, {
    collection: "users"
})
module.exports = model("User", userSchema)