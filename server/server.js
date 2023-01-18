const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())
const PORT = 8080;

book = [
  {
    name: "Kitab",
    category: "kjoijoi[jo[ij",
    PageCount: "11",
    price: "100",
    discountPercent: "10",
    authorId: "1",
    id: "0",
  },
  {
    name: "Kitab1",
    category: "pppppppppp",
    PageCount: "12",
    price: "200",
    discountPercent: "20",
    authorId: "2",
    id: "1",
  },
  {
    name: "Kitab2",
    category: "ssssss",
    PageCount: "13",
    price: "300",
    discountPercent: "30",
    authorId: "3",
    id: "2",
  },
];
author = [
  {
    id: "1",
    name: "Ferid",
    surname: "Qarayev",
  },
  {
    id: "2",
    name: "Susen",
    surname: "Ibrahimova",
  },
  {
    id: "3",
    name: "Aysel",
    surname: "Ibrahmli",
  },
  {
    id: "4",
    name: "Rauf",
    surname: "Haciyev",
  },
];


app.get("/api", (req, res) => {
  res.send("Welcome to our api");
});

app.get("/api/book", (req, res) => {
  res.send(book);
});

app.get("/api/author", (req, res) => {
  res.send(author);
});

app.get("/api/book/:id", (req, res) => {
  const { id } = req.params;
  const target = book.find((boo) => boo.id == id);
  res.send(target);
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
