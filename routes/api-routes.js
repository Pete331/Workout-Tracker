const mongoose = require("mongoose");
let db = require("../models");

module.exports = function (app) {
  // shows last workout on index page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

//   creates a workout
  app.post("/api/workouts", function (req, res) {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", function (req, res) {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};
