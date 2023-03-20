const express = require('express');
const { Client, Pool } = require('pg');

const app = express();

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'flyway-node-test',
  password: 'postgres',
  port: 5432
})

client.connect();

app.get('/', async (req, res) => {
  const result = await queryResult();

  res.json(result);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


async function queryResult() {
  const users = await client.query('SELECT * FROM users');

  console.log('Query results:', users.rows);

  return users.rows;
}