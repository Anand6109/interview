const express = require("express");

const { fetchAndStorePosts } = require("./controller");
const app = express();
const connectdb = require("./db");


app.use(express.json());


connectdb();
app.post('/fetch',fetchAndStorePosts);
app.listen(3000, () => {
    console.log("App is running on port 3000");
});
