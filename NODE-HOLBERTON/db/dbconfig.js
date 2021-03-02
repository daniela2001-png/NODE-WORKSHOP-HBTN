const mongoose = require('mongoose');
const dbConncetion = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true });
        console.log("conectado papi :3")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    dbConncetion
}