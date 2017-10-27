let express = require("express");
let connect = require("./connect");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json({ limit: "50mb" }));

// Access-Control-Allow-Origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/", function(req, res) {
    res.end("Hello Yin");
})

app.get("/menu", function(req, res) {
    let sql = "SELECT * FROM menu";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/mfood", function(req, res) {
    let sql = "SELECT * FROM mfood";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/mfood_type", function(req, res) {
    let sql = "SELECT * FROM mfood_type";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})
app.get("/promotion", function(req, res) {
    let sql = "SELECT * FROM promotion";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/restaurant", function(req, res) {
    let sql = "SELECT * FROM restaurant";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})
app.listen(3000, () => {
    console.log("ok")
})