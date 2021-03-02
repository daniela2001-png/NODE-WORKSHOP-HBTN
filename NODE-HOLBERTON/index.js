const express = require("express")
const { dbConncetion } = require("./db/dbconfig")
const app = express()
require("dotenv").config()

// conexion db con mongodb
dbConncetion();

app.get("/api", (req, resp) => {
    console.log("kjerhfuier")
    resp.send({
        ok: true,
        holi: ":c"
    })
})

app.listen(process.env.PORT, () => {
    console.log("server is running " + process.env.PORT)
})