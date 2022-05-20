import { config } from "./dev.mjs";

const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: 3000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "2d",
  },
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = import("./dev.mjs").config;
    break;
  default:
    envConfig = import("./dev.mjs").config;
    break;
}

export default { ...baseConfig, ...config };
