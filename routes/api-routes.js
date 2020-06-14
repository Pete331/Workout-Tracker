const mongoose = require("mongoose");
let db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    // .populate("exercises")
      .then((dbWorkout) => {
          console.log(dbWorkout);
        res.json(dbWorkout);
        console.log("We're here");
      })
      .catch((err) => {
        res.json(err);
      });
  });

//   app.get("/api/workouts/" + id, (req, res) => {
//     db.Workout.find({})
//       .then((dbWorkout) => {
//         res.json(dbWorkout);
//         console.log("We're here");
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });




};
