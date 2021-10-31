const { Schema, model } = require("mongoose");

const moviesSchema = new Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: [],
});

const moviesModel = model("movies", moviesSchema)

module.exports = moviesModel;