import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/book/${id}`)
      .then((res) => setBook(res.data));
  }, []);
  return (
    <div>
      <h1>Name: {book.name}</h1>
      <h3>Category: {book.category}</h3>
      <h2>Price: {book.price}</h2>
    </div>
  );
};

export default Details;
