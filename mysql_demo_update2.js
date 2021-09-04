var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "demo_test",
    password: "Demo_test1243!",
    database: "mydb"
});

con.connect( function (err) {
    if (err) throw err;
    console.log("Connected!" + 4);
    var sql = "INSERT INTO products (id, name) VALUES ?";
    var values = [
        [154, 'Choskolate Heaven'],
        [155, 'Tasty Lemons'],
        [156, 'Vanilla Dreams']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});