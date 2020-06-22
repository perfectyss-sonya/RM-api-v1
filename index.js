'use strict';

import dotenv from "dotenv";
import Hapi from "@hapi/hapi";
import appPlugins from "./plugins/index.js";

dotenv.config();

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  let plugins = [
    // {
    //   plugin: inert,
    //   options: {},
    // },
    // {
    //   plugin: Vision,
    //   options: {},
    // },
    // {
    //   plugin: HapiSwagger,
    //   options: swaggerOptions,
    // },
    {
      plugin: appPlugins,
      routes: {
        prefix: "/v1",
      },
    },
    // {
    //   plugin: healthPlugin,
    // },
  ];

  await server.register(plugins);
  await server.start();
  console.log('Server running at:', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();