const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Workout Type is Required",
  },
  name: {
    type: String,
    trim: true,
    required: "Workout Name is Required",
  },
  duration: {
    type: Number,
    // required: "Workout Duration is Required",
  },
  weight: {
    type: Number,
    // required: "Workout Weight is Required",
  },
  reps: {
    type: Number,
    // required: "Workout Reps is Required",
  },
  sets: {
    type: Number,
    // required: "Workout Sets is Required",
  },
  distance: {
    type: Number,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// Export the Exercise model
module.exports = Exercise;
