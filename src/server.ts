import * as express from "express";

function loggerMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log(`${req.method} ${req.path}`);
  next();
}

const app = express();
app.use(loggerMiddleware);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
