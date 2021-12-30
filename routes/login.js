const express = require('express')
const router   = express.Router()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "booking"
})

router.get('/login', (req,res) => {
    const selectFacility = "SELECT * FROM user";
    db.query (selectFacility, (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})



module.exports = router