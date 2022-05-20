import mongoose from "mongoose";
import options from "../config/index.mjs";

export const connect = () =>
  mongoose
    .connect(options.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // console.log(connection);
      console.log("DB connection successful!");
    })
    .catch((e) => console.log(`Database connection Error ${e}`));
