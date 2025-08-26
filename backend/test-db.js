const pool = require('./db');

pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL successfully!');
  connection.release();
  process.exit(0);
});
