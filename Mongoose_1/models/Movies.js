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

const insertManyDoc = async () => {
  try {
    // Creating new document
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["actions", "adventure"],
      isActive: true,
      // this is also created nested document
      comments: [{ value: "That was an Amazing movie..." }],
    });

    const m2 = new MovieModel({
      name: "John Wick",
      ratings: 5,
      money: 23000,
      genre: ["actions"],
      isActive: true,
      // this is also created nested document
      comments: [{ value: "John wich is very cool person" }],
    });

    const m3 = new MovieModel({
      name: "Iron Man 2",
      ratings: 4.5,
      money: 100000,
      genre: ["actions", "motivational"],
      isActive: true,
      // this is also created nested document
      comments: [{ value: "I am billionarie, smart, genius and saver" }],
    });

    const m4 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["actions", "adventure"],
      isActive: true,
      // this is also created nested document
      comments: [{ value: "That was an Amazing movie..." }],
    });

    const m5 = new MovieModel({
      name: "Sultan",
      ratings: 2,
      money: 60000,
      genre: ["actions", "love"],
      isActive: true,
      // this is also created nested document
      comments: [{ value: "Re sultan karde chatayi" }],
    });
    const result = await MovieModel.insertMany([m1, m2 , m3 , m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { insertManyDoc };
