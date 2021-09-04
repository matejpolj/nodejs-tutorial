var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "demo_test",
    password: "Demo_test1243!",
    database: "mydb"
});

con.connect( function (err) {
    if (err) throw err;
    console.log("Connected!" + 2);
    var sql = 'CREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(255))';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});