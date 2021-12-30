const express = require('express')
const router   = express.Router()
const mysql = require('mysql')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "booking"
})

router.get('/user', (req,res) => {
    const selectUser = "SELECT * FROM user";
    db.query (selectUser, (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.get('/user/:id', (req,res) => {
    const id = req.params.id
    const selectUser = "SELECT * FROM user WHERE user_ID = ?";
    db.query (selectUser, [id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})


router.post('/user/add', (req, res) => {
    const name = req.body.name;
    const email  = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const services = req.body.services;
    let serv
    if(services){
        serv = services.join(", ")
    }else{
        serv = "";
    }
    const addQuery = "INSERT INTO user (user_name, user_email, password, user_rule, user_services) VALUES(?,?,?,?,?)";

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {

            db.query(addQuery, [name, email, hash, role, serv], (err, result) => {
                if(!err){
                    res.send(result)
                }else{
                    res.send(err)
                }
            })
            
        });
    });
})

router.put('/user/delete', (req, res) => {
    const id = req.body.id
    const deleteQuery = "DELETE FROM user WHERE user_ID = ?";
    db.query(deleteQuery, [id], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.put('/user/edit', (req, res) => {
    const id = req.body.id
    const name = req.body.name;
    const email  = req.body.email;
    const password = req.body.password;
    
    if (password) {
        const editQuery = "UPDATE user set user_name = ?, user_email = ?, password = ? WHERE user_ID = ?";
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                db.query(editQuery, [name, email, hash, id], (err, result) => {
                    if(!err)
                        res.send(result)
                    else
                        res.send(err)
                })
            });
        });
    } else {
        const editQuery = "UPDATE user set user_name = ?, user_email = ? WHERE user_ID = ?";
        db.query(editQuery, [name, email, id], (err, result) => {
            if(!err)
                res.send(result)
            else
                res.send(err)
        })
    }

    
})

router.get('/customer', (req,res) => {
    const selectUser = "SELECT * FROM customer";
    db.query (selectUser, (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.get('/customer/email/:email', (req,res) => {
    const email = req.params.email
    const selectUser = "SELECT * FROM customer WHERE email = ? ";
    db.query (selectUser, [email], (err, result) => {
        if(!err)
            res.send(result)
        else
            res.send(err)
    })
})

router.post('/customer/add', (req, res) => {
    const name = req.body.name;
    const email  = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const varfierad = req.body.varfierad;
    const addQuery = "INSERT INTO customer (username, email, password, phonenumber, verified) VALUES(?,?,?,?,?)";

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            db.query(addQuery, [name, email, hash, phone, varfierad], (err, result) => {
                if(!err)
                    res.send(result)
                else
                    res.send(err)
            })
        });
    });
})




module.exports = router