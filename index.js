
const express = require('express')
const app = express()
app.use(express.json());

app.get('/ss', function (req, res, next) {
    console.log('Hello World');
    next();
},
    function (req, res, next) {
        console.log("middleware");
        req.query.name = "harshu";
        next();
    },
    function (req, res, next) {
        console.log("middleware");
        req.query.name = "ruchi";
        next();
    },
    function (req, res) {
        let n = req.query.name;
        res.send(`hello ${n}`)
    }
);
let port = 3000;
app.listen(port, function () {
    console.log(`server is running on port ${port}`)
})
