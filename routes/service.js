const express = require('express')
const router   = express.Router()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "booking"
})

router.get('/service', (req,res) => {
    const selectServices = "SELECT * FROM sub_category LEFT JOIN category ON sub_category.category_ID = category.category_ID  ";
    db.query (selectServices, (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.get('/service/:id', (req,res) => {
    const id = req.params.id
    const selectFacility = "SELECT * FROM sub_category LEFT JOIN category ON sub_category.category_ID = category.category_ID  WHERE city_ID = ?";
    db.query (selectFacility, [id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.get('/service/id/:id', (req,res) => {
    const id = req.params.id
    const selectFacility = "SELECT * FROM sub_category LEFT JOIN category ON sub_category.category_ID = category.category_ID  WHERE sub_category_ID = ?";
    db.query (selectFacility, [id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})


router.post('/service/add', (req, res) => {
    const name = req.body.name;
    const info = req.body.info;
    const period = req.body.period;
    const price = req.body.price;
    const discount = req.body.discount;
    const id = req.body.id;
    const catid =  req.body.catid;
    
    const addQuery = "INSERT INTO sub_category (sub_category_name, sub_category_desc, sub_category_period, sub_category_price, sub_category_discount, category_ID ) VALUES(?,?,?,?,?,?)";
    db.query(addQuery, [name, info, period, price, discount, catid], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.put('/service/edit', (req, res) => {
    const id = req.body.id;

    const name = req.body.name;
    const info = req.body.info;
    const period = req.body.period;
    const price = req.body.price;
    const discount = req.body.discount;
    const catid =  req.body.catid;

    const editQuery = "UPDATE sub_category set sub_category_name = ?, sub_category_desc = ?, sub_category_period = ?, sub_category_price = ?, sub_category_discount = ?, category_ID = ? WHERE sub_category_ID  = ?";
    db.query(editQuery, [name, info, period, price, discount, catid,  id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.put('/service/delete', (req, res) => {
    const id = req.body.id
    const deleteQuery = "DELETE FROM sub_category WHERE sub_category_ID = ?";
    db.query(deleteQuery, [id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})


module.exports = router