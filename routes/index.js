// Here, we’re importing Express into our routes file and then grabbing the router from it. We then use the router to respond to any requests to the root URL (in this case http://localhost:3000) with an “It works!” message.
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('It works!');
});

module.exports = router;