import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import rednerApp from "./dist/server/ServerApp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs
  .readFileSync(path.resolve(__dirname, "./dist/client/index.html"))
  .toString();

const parts = html.split("not rendered");

const app = express();

app.use(
  "/assets",
  express.static(path.resolve(__dirname, "./dist/client/assets"))
);

app.use((req, res) => {
  res.write(parts[0]);

  const stream = rednerApp(req.url, {
    onShellReady() {
      // if it is crawler do nothing
      stream.pipe(res);
    },
    onShellError() {
      // do error handling here
    },
    onAllReady() {
      // if it is crawler
      //   stream.pipe(res);

      // last thing to write
      res.write(parts[1]);
      res.end();
    },
    onError(err) {
      console.log({ err });
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
