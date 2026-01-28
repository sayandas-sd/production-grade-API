import express from "express";
import { createContext } from "./server/context";
import { appRouter } from "./server";
import * as trpcExpress from '@trpc/server/adapters/express';

const port = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "hello guys our trpc server is running"
  })
})

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(port, () => {
  console.log(`server is running: ${port}`);
})
