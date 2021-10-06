const Workout = require("../models/Workout.js");

//Routes

//Route to GET last workout
app.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            res.json(err)
        });
});

//GET route for all workouts in a range
app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            res.json(err)
        });
});

//PUT route to update an existing exercise
app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate()
})

//POST route to create a new exercise
app.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            res.json(err)
        });
});

module.exports = router;