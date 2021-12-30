const express = require('express')
const router   = express.Router()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "booking"
})

router.get('/facility', (req,res) => {
    const selectFacility = "SELECT * FROM city";
    db.query (selectFacility, (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.get('/facility/:id', (req,res) => {
    const id = req.params.id
    const selectFacility = "SELECT * FROM city WHERE city_ID = ?";
    db.query (selectFacility, [id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.put('/facility/toggleActive/', (req,res) => {
    const active = req.body.active;
    const id  = req.body.id;
    const toggleActiveQuery = "UPDATE city set available = ? WHERE city_ID = ?";
    db.query(toggleActiveQuery, [active, id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.post('/facility/add', (req, res) => {
    const name = req.body.name;
    const address  = req.body.address;
    const zipcode = req.body.zipcode;
    const city  = req.body.city;
    const phone = req.body.phone;
    const email  = req.body.email;
    const info = req.body.info;

    const addQuery = "INSERT INTO city (city_name, address, zipcode, city, phone, email, info, status, available) VALUES(?,?,?,?,?,?,?,1,1)";
    db.query(addQuery, [name, address, zipcode, city, phone, email, info], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.put('/facility/edit', (req, res) => {
    const id = req.body.id
    const name = req.body.name;
    const address  = req.body.address;
    const zipcode = req.body.zipcode;
    const city  = req.body.city;
    const phone = req.body.phone;
    const email  = req.body.email;
    const info = req.body.info;

    const editQuery = "UPDATE city set city_name = ?, address = ?, zipcode = ?, city = ?, phone = ?, email = ?, info = ? WHERE city_ID = ?";
    db.query(editQuery, [name, address, zipcode, city, phone, email, info, id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.put('/facility/delete', (req, res) => {
    const id = req.body.id
    const deleteQuery = "DELETE FROM city WHERE city_ID = ?";
    db.query(deleteQuery, [id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})


module.exports = router