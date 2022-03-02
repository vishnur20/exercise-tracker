const router = require('express').Router();
const exerciseModel = require('../model/exercise.model');

router.get('/', (req, res) => {
    try {
        exerciseModel.find()
            .then(exercises => res.json(exercises));
    }
    catch(err) {
        res.status(400).json(`ERROR: ${err}`);
        res.end();
    }
});

router.post('/add', (req, res) => {
    try {
        // creating new exercise object and push it into DB
        const newExercise = new exerciseModel({
            userName: req.body.userName,
            description: req.body.description,
            duration: Number(req.body.duration),
            date: Date.parse(req.body.date)
        });

        newExercise.save()
            .then(() => res.json('Exercise added!'));
    }
    catch(err) {
        console.log(`ERROR: ${err}`);
        res.status(400).json(`ERROR: ${err}`);
        res.end();
    }
});

router.get('/:id', (req, res) => {
    try {
        exerciseModel.findById(req.params.id)
            .then(exercise => res.json(exercise));
    }
    catch(err) {
        res.end(`ERROR: ${err}`);
    }    
});

router.delete('/:id', (req, res) => {
    try {
        exerciseModel.findByIdAndDelete(req.params.id)
            .then(() => res.end('Exercise deleted!'));
    }
    catch(err) {
        res.end(`ERROR: ${err}`);
    }
});

router.post('/update/:id', (req, res) => {
    try {
        exerciseModel.findById(req.params.id)
            .then((exercise) => {
                exercise.userName = req.body.userName;
                exercise.save()
                .then(() => res.end(`Updated Data: ${exercise}`));
            });
    }
    catch(err) {
        res.end(`ERROR: ${err}`);
    }
});

module.exports = router;