const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5001
const app = express()

const getResume = async (request, response, next) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../data/resume.json'))
        const resume = JSON.parse(data)
        response.json(resume)
    } catch (error) {
        console.log('There was an error: ', error)
    }
}

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/resume', getResume)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
