require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
//some middlewares...
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router ..middleware..
app.use("/auth", require("./routes/AuthRoute"));
app.use("/chat", require("./routes/ChatRoute"));
app.use("/message", require("./routes/MessageRoute"));

const PORT = process.env.PORT || 8000;

//db connection and server listen.....

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("DB connected😃");
    app.listen(PORT, () => {
      console.log(`server runs on port : ${PORT} 😆`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
