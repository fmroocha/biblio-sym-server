const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/mongoose");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

const books = require("./routes/book/book.routes");
app.use("/api/books", books);

const genres = require("./routes/genre/genre.routes");
app.use("/api/genres", genres);

const users = require("./routes/user/user.routes");
app.use("/api/users", users);

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
