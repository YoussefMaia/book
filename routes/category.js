const express = require('express')
const router   = express.Router()
// const mysql = require('mysql')

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "booking"
// })

// const db = mysql.createPool({
//     host: "sql11.freemysqlhosting.net",
//     user: "sql11462320",
//     password: "VM52ymnmGq",
//     database: "sql11462320"
// })



router.get('/category', (req,res) => {
    // const selectCategory = "SELECT * FROM category LEFT JOIN city ON category.city_ID = city.city_ID ";
    // db.query (selectCategory, (err, result) => {
    //     if(!err)
    //         res.send(result)
    //     else
    //         res.send(err)
    // })
    res.send("Hwllow")
})

// router.get('/category/id/:id', (req,res) => {
//     const id = req.params.id
//     const selectCategory = "SELECT * FROM category WHERE category_ID = ?";
//     db.query (selectCategory, [id], (err, result) => {
//         if(!err)
//             res.send(result)
//         else
//             res.send(err)
//     })
// })

// router.get('/category/:id', (req,res) => {
//     const id = req.params.id
//     const selectCategory = "SELECT * FROM category WHERE city_ID = ?";
//     db.query (selectCategory, [id], (err, result) => {
//         if(!err)
//             res.send(result)
//         else
//             res.send(err)
//     })
// })

// router.put('/facility/toggleActive/', (req,res) => {
//     const active = req.body.active;
//     const id  = req.body.id;
//     const toggleActiveQuery = "UPDATE city set available = ? WHERE city_ID = ?";
//     db.query(toggleActiveQuery, [active, id], (err, result) => {
//         if(!err)
//             res.send(result)
//         else
//             res.send(err)
//     })
// })

// router.post('/category/add', (req, res) => {
//     const name = req.body.name;
//     const info = req.body.info;
//     const id =  req.body.id;
    
//     const addQuery = "INSERT INTO category (category_name, category_info, city_ID ) VALUES(?,?,?)";
//     db.query(addQuery, [name, info, id], (err, result) => {
//         if(!err)
//             res.send(result)
//         else
//             res.send(err)
//     })
// })

// router.put('/category/edit', (req, res) => {
//     const name = req.body.name;
//     const info = req.body.info;
//     const id =  req.body.id;
//     const cid = req.body.cid

//     const editQuery = "UPDATE category set category_name = ?, category_info = ?, city_ID = ? WHERE category_ID = ?";
//     db.query(editQuery, [name, info, id, cid], (err, result) => {
//         if(!err)
//             res.send(result)
//         else
//             res.send(err)
//     })
// })

// router.put('/category/delete', (req, res) => {
//     const id = req.body.id
//     const deleteQuery = "DELETE FROM category WHERE category_ID = ?";
//     db.query(deleteQuery, [id], (err, result) => {
//         if(!err)
//             res.send(result)
//         else
//             res.send(err)
//     })
// })


module.exports = router