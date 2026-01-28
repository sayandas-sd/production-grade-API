import express from "express";

const port = 3000;


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "hello guys our trpc server is running"
  })
})

app.listen(port, () => {
  console.log(`server is running: ${port}`);
})
