var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "demo_test",
    password: "Demo_test1243!",
    database: "mydb"
});

con.connect( function (err) {
    if (err) throw err;
    console.log("Connected!" + 3);
    var sql = "INSERT INTO users (name, favourite_product) VALUES ?";
    var values = [
        ['John', 154],
        ['Peter', 154],
        ['Amy', 155],
        ['Hannah', 1],
        ['Michael', 1]
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Many records inserted, number: " + result.affectedRows);
        console.log(result);
    });
});