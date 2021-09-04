var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "demo_test",
    password: "Demo_test1243!",
    database: "mydb"
});

con.connect( function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT name, address FROM customers";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
        console.log(fields[1].name);
    });
});