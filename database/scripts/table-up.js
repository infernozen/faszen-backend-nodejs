const mysql = require('mysql');
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = require('../../utils/secrets');
const {
    createTableUSers,
    createTableOTPs
} = require('../queries/init_queries');

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
});

// Function to create tables
function createTables() {
    connection.query(createTableUSers, function (error, results, fields) {
        if (error) {
            console.error('Error creating users table: ', error);
        } else {
            console.log('Users table created successfully.')
        }
    });

    connection.query(createTableOTPs, function (error, results, fields) {
        if (error) {
            console.error('Error creating otps table: ', error);
        } else {
            console.log('otps table created successfully.')
        }
    });
}

// Create tables
createTables();
