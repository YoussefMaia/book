const express = require('express')
const router   = express.Router()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "booking"
})

router.get('/booking', (req,res) => {
    const selectBooking = "SELECT * FROM reservation";
    db.query (selectBooking, (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})


router.post('/booking/add', (req, res) => {
    const city = req.body.city;
    const selectedService  = req.body.selectedService;
    const emailField = req.body.emailField;
    const name  = req.body.name;
    const phone = req.body.phone;
    const dateYear  = req.body.dateYear;
    const time = req.body.time;
    const timeTo = req.body.timeTo;
    const start = dateYear+time
    const end = dateYear+timeTo

    const addQuery = "INSERT INTO reservation (city_ID, service_ID , user_email, username, phonenumber, reservation_date, reservation_from, reservation_to, start, end) VALUES(?,?,?,?,?,?,?,?,?,?)";
    db.query(addQuery, [city, selectedService, emailField, name, phone, dateYear, time, timeTo, start, end], (err, result) => {
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