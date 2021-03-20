const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
 
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});

require("./routes/api.js")(app);
require("./routes/html.js")(app);



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });