// Here, we’re importing Express into our routes file and then grabbing the router from it. We then use the router to respond to any requests to the root URL (in this case http://localhost:3000) with an “It works!” message.
const express = require('express');

const router = express.Router();

// This uses the render method on Express’s response object to send the rendered view to the client.
router.get('/', (req, res) => {
    res.render('form');
});


module.exports = router;