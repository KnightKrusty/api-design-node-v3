import express from "express";
import { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";

import { connect } from "./utils/db.mjs";
import config from "./config/index.mjs";

import { protect, signin, signup } from "./utils/auth.mjs";

import * as Item from "./resources/item/item.model.mjs";
import ItemRouter from "./resources/item/item.router.mjs";
import ListRouter from "./resources/list/list.router.mjs";
import UserRouter from "./resources/user/user.router.mjs";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/signup", signup);
app.post("/signin", signin);

app.use("/api", protect);
app.use("/api/item", ItemRouter);
app.use("/api/list", ListRouter);
app.use("/api/user", UserRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log("Server is on 3000");
    });
  } catch (error) {
    console.error(erorr);
  }
};
