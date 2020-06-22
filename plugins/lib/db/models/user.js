"use strict";

// import dbTableName from "../../const/dbTableName.js";

export default function (Model, modelHash) {
  class postgres extends Model {
    static get tableName() {
      return "users";
    }
  }

  return postgres;
};
