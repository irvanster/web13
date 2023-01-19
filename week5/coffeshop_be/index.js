require('dotenv').config()

const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const router = require('./src/route/index')
const cors = require('cors')

app.use(express.static('public'))
// https://expressjs.com/en/starter/static-files.html

//defaultnya express js itu ga menerima semua jenis form.
// use() middleware urlencoded, json
//menerima application/x-www-form-urlencoded
app.use(json());
app.use(urlencoded({ extended: true }));
//menerima json
// app.use(cors({
//   origin: ['adriel.com'], //mengijinkan adriel.com
// }))
app.use(cors()) //semua bisa akses
app.use('/api/v1/', router)

app.get("*", (req, res) => {
  return res.send({
    status: 404,
    message: "not found",
  });
});

app.listen(5000, (req, res) => {
  console.log("backend successfully running on port 5000");
});
