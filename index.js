const express = require('express')
const app = express()
// The platform passes the port in the PORT variable; 3000 by default
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
