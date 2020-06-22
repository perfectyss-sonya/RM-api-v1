'use strict';

export default async function getUsers (request, h) {
  const { User } = request.server.app.db.model;

  const data = await User.query()
  .catch((ex) => {
    console.log(ex);
  })


  return h.response(data);

}
