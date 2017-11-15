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


app.get("/", function (req, res) {
    res.end("Hello Yin");
})

app.get("/menu", function (req, res) {
    let sql = "SELECT * FROM menu";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/mfood", function (req, res) {
    let sql = "SELECT * FROM mfood ";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/mfood/:id", function (req, res) {
    let id = req.params.id
    let sql = "SELECT * FROM mfood WHERE food_id =" + id;
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})



app.get("/mfood_type", function (req, res) {
    let sql = "SELECT * FROM mfood_type";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})
app.get("/promotion", function (req, res) {
    let sql = "SELECT * FROM promotion";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/restaurant", function (req, res) {
    let sql = "SELECT * FROM restaurant";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get("/comment_mfood", function (reg, res) {
    let sql = "SELECT * FROM comment_mfood";
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})
app.get("/comment_mfood/:id", function (req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM comment_mfood  WHERE food_id = " + id;
    connect.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})
app.post("/comment_mfood", function (req, res) {
    let detail = req.body.comment;
    let food_id = req.body.id;


    const sql = `INSERT INTO comment_mfood ( detail_comment, food_id) VALUES ( "${detail}", "${food_id}")`;
    connect.query(sql, (err, result) => {
        if (result) {
            res.json({ "status": "success" });
        } else {
            res.json({ "status": "fail" });
        }
    })

})

app.listen(7777, () => {
    console.log("ok")
})