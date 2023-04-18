const express = require('express');
const app = express();

require("dotenv").config();


app.get('/', (req, res) => {
    res.send("Welcome to E-Sysmark");
});



const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`server runnning at http://localhost:${port}`);
})