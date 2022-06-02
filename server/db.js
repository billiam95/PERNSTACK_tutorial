const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'billiam',
  password: 'admin123',
  host: 'localhost',
  port: 5432,
  database: 'perntodo'
});

module.exports = pool;
