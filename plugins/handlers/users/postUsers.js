'use strict';

 export default async function postUsers (request, h) {
  const { User } = request.server.app.db.model;

  const data = await User.query();

  return h.response(data);

}
