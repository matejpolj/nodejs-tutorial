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
    var adr = 'Park Lane 38';
    var name = 'Amy';
    var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
    con.query(sql, [name, adr], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});