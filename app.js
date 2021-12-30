const express = require('express')
const app = express()
// const cors   = require('cors')
// const bodyParser = require('body-parser')

// Routes
// const facility = require('./routes/facility')
const category = require('./routes/category')
// const services = require('./routes/service')
// const account  = require('./routes/account')
// const booking  = require('./routes/booking')
// const login  = require('./routes/login')
// app.use(cors({
//     origin: [
//         "http://localhost:3000", 
//         "http://localhost:3001", 
//         "http://localhost:3003"
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
// }))

// app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}))


// // Use router
// app.use('/api', facility)
app.use('/api', category)
// app.use('/api', services)
// app.use('/api', account)
// app.use('/api', booking)
// app.use('/auth', login)

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log("App run on port 3002")
})