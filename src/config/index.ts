import dotenv from "dotenv";

type serverConfig = {
  PORT: number;
};

function loadEnv() {
  dotenv.config();
  console.log("Environment variables loaded from .env file");
}

loadEnv();

export const serverConfig: serverConfig = {
  PORT: Number(process.env.PORT) || 3000,
};
