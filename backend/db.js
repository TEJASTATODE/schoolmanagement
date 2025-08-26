require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool(process.env.DB_URL, {
    
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
  connection.release();
});

module.exports = pool;
