const fs = require('fs');
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/employees', (req, res) => {
  let employeesJSON = './employees.json'
  fs.readFile(employeesJSON, (err, data) => {
    let employeesArr = JSON.parse(data)
    res.send(employeesArr)
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))