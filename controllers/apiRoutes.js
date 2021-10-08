//ALL API ROUTES listed from /public/api.js file
const router = require('express').Router();
const Workout = require('../models/Workout')

//Route to GET workouts of total duration over last 7 days 
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        //passing in two key values, and need $"" to pass into $sum which is passed into totalDuration
        { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
    .then(userData => {
        res.json(userData);
    })
    .catch(err => {
        res.json(err)
    });
});

//GET route for all workouts in a range
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        { $addFields: { totalDuration:{ $sum: "$exercises.duration" } } },
    ])
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            res.json(err)
        });
});

//PUT route to update an existing exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, {
        $push: { exercises: body }
    })
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            res.json(err)
        });
});

//POST route to create a new exercise
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            res.json(err)
        });
});

module.exports = router;