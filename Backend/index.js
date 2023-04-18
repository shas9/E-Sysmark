const express = require('express');
const app = express();

require("dotenv").config();


app.get('/', (req, res) => {
    res.send("Welcome to E-Sysmark");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/eSysmark")
  .then(()=> console.log("Connected to mongo db"))
  .catch((err) => console.log(err.message));


const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`server runnning at http://localhost:${port}`);
})