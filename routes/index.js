// Here, we’re importing Express into our routes file and then grabbing the router from it. We then use the router to respond to any requests to the root URL (in this case http://localhost:3000) with an “It works!” message.
const express = require('express');
const mongoose = require('mongoose');
//Validating Form Input
const { check, validationResult } = require('express-validator');

const router = express.Router();
const Registration = mongoose.model('Registration');

// This uses the render method on Express’s response object to send the rendered view to the client.

// pass in an appropriate title for the template to display:
// router.get('/', (req, res) => {
//     res.render('form', { title: 'Registration form' });
// });
router.get('/registrations', (req, res) => {
    Registration.find()
        .then((registrations) => {
            res.render('index', { title: 'Listing registrations', registrations });
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
});
// router.post('/', (req, res) => {
//     console.log(req.body);
//     res.render('form', { title: 'Registration form' });
// });
router.post('/',
    [
        check('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        check('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email'),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const registration = new Registration(req.body);
            registration.save()
                .then(() => { res.send('Thank you for your registration!'); })
                .catch((err) => {
                    console.log(err);
                    res.send('Sorry! Something went wrong.');
                });
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
    }
);



module.exports = router;