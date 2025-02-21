const axios = require('axios');
const Fetch = require('./model');


const fetchAndStorePosts = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        await Fetch.insertMany(response.data);
        res.json({
            success:true
        })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { fetchAndStorePosts };