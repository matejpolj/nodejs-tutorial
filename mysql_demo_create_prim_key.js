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
    var sql = "CREATE TABLE customers2 (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created!");
    });
});