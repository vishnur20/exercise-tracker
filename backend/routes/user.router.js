const router = require('express').Router();
const userModel = require('../model/user.model');

router.get('/', async (req, res) => {
    try {
        // find() method of mongoose get all the data from the userModel
        await userModel.find()
            .then(users => res.json(users));
    }
    catch(err) {
        console.log(`ERROR: ${err}`);
    }
});

router.post('/add', async (req, res) => {
    try {
        // creating a new user object and push it into the DB
        const newUser = new userModel({
            name: req.body.name
        });

        await newUser.save()
            .then(() => {
                res.json('User added!');
            });
    }
    catch(err) {
        console.log(`ERROR: ${err}`);
        res.status(400).json(`ERROR: ${err}`);
        res.end();
    }
});

module.exports = router;