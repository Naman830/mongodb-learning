import mongoose from "mongoose";

//Step-1 define Schema
const movieSchema = new mongoose.Schema({
  // help to deeply structiure the datbase we want
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    // help to provide decimal values
    type: mongoose.Decimal128,
    required: true,
    // Just for adding validation
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// STEP: 2 Creating Models

// This Movie is our collection name
const MovieModel = mongoose.model("Movie", movieSchema);

const updateById = async (id) => {
  try {
    // updateOne(filter, WhaToChange)
    const result = await MovieModel.updateOne({_id: id}, { ratings: 5 });
    console.log(result);

    // iterating data
  } catch (error) {
    console.log(error);
  }
};

export { updateById };
