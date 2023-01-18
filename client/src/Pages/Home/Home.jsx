import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

const Home = () => {
    const [books,setBooks]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/book").then(res=>setBooks(res.data))
    },[])
  return (
    <ul>
    {books.map((book)=>{
        return <Book key={book.id} book={book}/>
    })}
    </ul>
  )
}

export default Home