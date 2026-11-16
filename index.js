const express = require('express')
const app = express()
// Порт передаёт платформа в переменной PORT; без неё — 3000
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
