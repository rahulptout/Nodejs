const mysql = require('mysql2');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
    } else {
        console.log('DB connection successful');
    }
});

module.exports = mysqlConnection;
