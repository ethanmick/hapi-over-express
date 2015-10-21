'use strict';
//
// Ethan Mick
//

const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = express.Router()

router.post('/hello', (req, res) => {
    res.json({ hello: req.body.name })
})

app.use(router)

app.listen(port, () => {
    console.log('Server running at:', port)
})
