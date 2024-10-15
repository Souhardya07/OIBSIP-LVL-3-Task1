const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")

app.use((req, res, next)=> {
  res.setheader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
    );
  next();
});


app.use(express.json())
app.use('/api',require("./routes/CreatUser"));
app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})