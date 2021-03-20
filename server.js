if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require("express");
const path = require('path');
const logger = require("morgan");
const mongoose = require("mongoose");

//once deployed to heroku remove this line.
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/workout";

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", {
mongoose.connect(dbUrl,{ 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});




const PORT = process.env.PORT || 3000;

const app = express();
 
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))




//mongodb+srv://mytracker:<password>@cluster0.6pgpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


require("./routes/api.js")(app);
require("./routes/html.js")(app);



const port = process.env.PORT || 32000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
