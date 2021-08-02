const express = require("express");

const app = express();

app.use(express.json());

app.all("/request/*", (req, res) => {
  res.json({
    headers: req.headers,
    body: req.body,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
