import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";


const app = express();

app.use(express.json());

app.use("/api/v1", v1Router);
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
