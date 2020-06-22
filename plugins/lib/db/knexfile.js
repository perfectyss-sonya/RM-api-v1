"use strict";

process.env.DB_HOSTNAME = "localhost";
process.env.DB_PORT = 5432;
process.env.DB_DATABASE = "postgres";
process.env.DB_USERNAME = "postgres";
process.env.DB_PASSWORD = "password";

const local = {
  client: "pg",
  connection: {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
    timezone: "UTC",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: { tableName: "knex_migrations" },
  debug: false,
};

const dev = JSON.parse(JSON.stringify(local));
const production = JSON.parse(JSON.stringify(local));
const testing = JSON.parse(JSON.stringify(local));


export default {
  local,
  dev,
  production,
  testing,
};
