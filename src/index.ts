import express from "express";
import { createContext } from "./server/context";
import { appRouter } from "./server";
import * as trpcExpress from '@trpc/server/adapters/express';
import { generateOpenApiDocument, createOpenApiExpressMiddleware } from 'trpc-to-openapi';
import fs from "fs/promises";

const port = 3000;

const app = express();

app.use(express.json());

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'todo server',
  version: '1.0.0',
  baseUrl: 'http://localhost:3000/api',
});

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "hello guys our trpc server is running"
  })
})

fs.writeFile("openapi-specification.json", JSON.stringify(openApiDocument))


app.get("/openapi.json", (req, res) => {
  return res.json(openApiDocument)
})

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.use("/api", createOpenApiExpressMiddleware({
  router: appRouter,
  createContext,
}))

app.listen(port, () => {
  console.log(`server is running: ${port}`);
})
