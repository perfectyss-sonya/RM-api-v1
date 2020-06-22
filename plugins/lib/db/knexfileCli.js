/**
 * This file is only required when executing knex via CLI as per defined in Makefile.
 * Create a copy of knexfileCli.example.js and rename it to knexfileCli.js,
 * then provide the required environment variables below.
 */

"use strict";

process.env.DB_HOSTNAME = "localhost";
process.env.DB_PORT = 5432;
process.env.DB_DATABASE = "postgres";
process.env.DB_USERNAME = "postgres";
process.env.DB_PASSWORD = "password";

module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: { tableName: "knex_migrations" },
  debug: false,
};
