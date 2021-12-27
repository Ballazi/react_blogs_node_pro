// const express = require("express");
// const app = express();
const app = require("./express");
// const cors = require("cors");
// app.use(cors());
let port = process.env.PORT || 8000;
app.listen(port,()=>console.log("Server is started on port",port));