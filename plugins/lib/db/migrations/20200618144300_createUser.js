"use strict";

const dbTableName = require("../../const/dbTableName");

const tableName = dbTableName.USERS_TABLE_NAME;

function tableDefinition(table) {
  table.increments("id").unsigned().primary();
  table.string("name").unique().notNullable(); // This is a kebab-cased string
  table.string("userName").unique().notNullable();
  table.string("password").notNullable().defaultTo("user");
  table.jsonb("metadata");
  table.timestamps(true, true);
}

exports.up = async (knex, Promise) => {
  await knex.schema.createTable(tableName, tableDefinition);
  console.log(`+++ ${tableName} table created.`);
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTable(tableName, tableDefinition);
  console.log(`--- ${tableName} table dropped.`);
};
