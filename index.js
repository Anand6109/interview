const express = require("express");
const dotenv = require("dotenv");
const { fetchAndStorePosts } = require("./controller");
const app = express();
const connectdb = require("./db");

dotenv.config();
app.use(express.json());


connectdb();
app.post('/fetch',fetchAndStorePosts);
app.listen(3000, () => {
    console.log("App is running on port 3000");
});
