const mysql = require('mysql2');
const url = require('url');


const mysqlUrl = url.parse(process.env.MYSQL_URL);

const db = mysql.createConnection({
  host: mysqlUrl.hostname,
  user: mysqlUrl.auth.split(':')[0],
  password: mysqlUrl.auth.split(':')[1],
  database: mysqlUrl.path.split('/')[1]
});

db.connect((err) => {
  if (err) {
    process.exit(1);  
  }
//   console.log('Connected to MySQL database');

 
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS squares (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL
    );
  `;

  db.query(createTableQuery, (err, results) => {
    if (err) {
    //   console.error('Error creating table:', err);
    } else {
    //   console.log('Checked for squares table or created one');
    }
  });
});

module.exports = db;
