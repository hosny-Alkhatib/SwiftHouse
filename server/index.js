import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const uri =
  "mongodb+srv://admin:swift2house69@cluster0.snqdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
  console.log("al78noy, connection established and running on port: 5000");
});

  })
  .catch((err) => {
    console.log(`error you stupidass ${err}`);
  });

app.get("/", (req, res) => {
  res.send("<h1 contenteditable>Fuck Hassan Jouda</h1>");
});
