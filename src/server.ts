import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";
import { appErrorHandler } from "./middlewares/error.middleware";
import logger from "./config/logger.config";

const app = express();

app.use(express.json());

app.use("/api/v1", v1Router);
app.use(appErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  logger.info(`Press Ctrl+C to stop the server`);
});
