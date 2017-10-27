let mysql= require("mysql");
let connect= mysql.createConnection({
    host: "streetfood.in.th",
    user: "admin_jilattikun",
    password: "123456",
    database: "admin_streetfood"
});
connect.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("connect...");
    }
})
module.exports = connect;