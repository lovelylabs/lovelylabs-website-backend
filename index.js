const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
