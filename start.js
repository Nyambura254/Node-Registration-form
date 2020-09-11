// export our app variable so that it can be imported and used in other files.

const app = require('./app');

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});