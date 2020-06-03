const mysql = require('mysql');

const requeteInsert = "INSERT INTO messages (Message, User, Heure) VALUES ?";

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bot-discord-espion",
  charset: 'utf8mb4_general_ci'
});

connection.connect((err) =>
{
  if (err) throw err;
  console.log("Connected!");
});

exports.Insert = (values) =>
{
	connection.query(requeteInsert, [values]);
}