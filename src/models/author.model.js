const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    bio: {
      type: String,
      trim: true,
    },
    birthYear: {
      type: Number,
    },
  },
  { timestamps: true }, // auto creates createdAt & updatedAt
);

module.exports = mongoose.model("Author", AuthorSchema);
