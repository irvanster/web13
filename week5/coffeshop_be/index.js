const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const router = require('./src/route/index')
//defaultnya express js itu ga menerima semua jenis form.
// use() middleware urlencoded, json
//menerima application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));
//menerima json
app.use(json());
app.use('/api/v1/', router)

app.get("*", (req, res) => {
  return res.send({
    status: 404,
    message: "not found",
  });
});

app.listen(3000, (req, res) => {
  console.log("backend successfully running on port 3000");
});
