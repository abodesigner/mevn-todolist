const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("./config/db")

const app = express();

//Middleware
app.use(express.json())
app.use(cors());

// register todoRoutes
const todoRoutes = require("./routes/todoRoutes");
app.use(todoRoutes)


// Handle Production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public'));

    // Handle SPA
    app.get("/.*/", (req, res) => {
        res.sendFile(__dirname + "/public/index.html")
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server running", port);
})