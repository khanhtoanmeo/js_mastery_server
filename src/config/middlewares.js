import morgan from "morgan";
import cors from "cors";
import express from "express";

export default function configMiddleWare(app) {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  return app;
}
