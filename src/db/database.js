/**
 *
 * @fileoverview DB configuration file.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 *
 */

import { connect } from "mongoose";
const { MONGODB_HOST, MONGODB_DATABASE } = process.env;

process.env.MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then((db) =>
    console.info(
      "**********************************\n\tOk, DB on connect\n**********************************"
    )
  )
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
