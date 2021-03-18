const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("./config/db")

const app = express();

//Middleware
app.use(express.json())
app.use(cors());

// register postRoutes
const postRoutes = require("./routes/postRoutes");
app.use(postRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server running", port);
})