"use strict";

import Boom from "boom";
import knex from "knex";
import objection from "objection";
import db  from "./lib/db/index.js";
import handler from "./handlers/index.js";


const plugin = {
  name: "um-data-api-v1",
  version: "1.0.0",
  register: (server, options) => {
    server.app.Boom = Boom;
    server.app.db = db;
    server.app.knex = knex;
    server.app.objection = objection;

    server.route([
      {
        method: 'GET',
        path: '/users',
        handler: handler.getUsers,
      },
    ]);
  },
};

export default {
  plugin,
};
