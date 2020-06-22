"use strict";

import Knex from "knex";
import objection from "objection";
import path from "path";
import knexFile from "./knexfile.js";
import User from "./models/user.js";

const { Model } = objection;
const knex = Knex(knexFile["local"]);
Model.knex(knex);

const initModelHash = {
  User,
};
const modelHash = {};

Object.keys(initModelHash).forEach(function (modelName) {
  const model = initModelHash[modelName](Model, modelHash);
  modelHash[modelName] = model;
});

async function migrate() {
  await knex.migrate.latest({
    directory: path.resolve(__dirname, "./migrations"),
  })
  .catch((err) => {
    console.log(err);
  });
}


export default {
  knex,
  objection,
  migrate,
  model: modelHash,
};