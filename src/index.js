import { config } from "dotenv";
import express from "express";
import configMiddleWare from "./config/middlewares";
import router from "./routes/routes";
config();

const app = express();
const port = process.env.DEV_PORT || 8888;

configMiddleWare(app);
app.use("/api", router);

app.listen(port, () => {
  console.log("app listening on port ", port);
});

export default app;
