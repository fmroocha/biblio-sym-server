const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Genre",
    },
    image: {
        type: String,
        required: true,
    },
    availableForLoan: {
        type: Number,
        required: true,
    },
    onLoan: {
        type: Number,
        default: 0,
        required: true,
    }
});

bookSchema.statics.findByGenre = async (genre) => {
    const booksByGenre = await Book.find({ genre });
    if (booksByGenre.length === 0) {
        throw new Error("No books of this genre was found.");
    }
    return booksByGenre;
};

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
