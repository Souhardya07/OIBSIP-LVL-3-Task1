const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")


app.use(express.json())
app.use('/api', require("./Routes/CreatUser"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})