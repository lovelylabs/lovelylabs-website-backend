const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5001
const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/resume', (request, response) => {
    response.json({ name: 'Alexander Guerra' })
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
