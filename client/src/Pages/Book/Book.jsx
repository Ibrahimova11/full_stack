import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate();
  return (
    <li>
      <div>
        <h1>Name: {book.name}</h1>
        <h3>Category: {book.category}</h3>
        <h2>Price: {book.price}</h2>
        <div>
          <button onClick={() => navigate(`/Details/${book.id}`)}>
            Detail
          </button>
        </div>
      </div>
    </li>
  );
};

export default Book;
