import express from "express";
import { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";

export const app = express();
const router = express.Router();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

router.get("/me", (req, res) => {
  res.send({
    me: "Hello",
  });
});

app.use("/api", router);

const log = (req, res, next) => {
  console.log("logging");
  next();
};

app.get("/", log, (req, res, next) => {
  res.send({
    name: "Express server",
    message: "hello from server side",
  });
});

app.post("/", (req, res, next) => {
  console.log(req.body);

  res.send({ message: "ok got it" });
});

export const start = () => {
  app.listen(3000, () => {
    console.log("Server is on 3000");
  });
};
