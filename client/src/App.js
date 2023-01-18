
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import AddPage from './Pages/AddPage/AddPage'
import Book from './Pages/Book/Book'
import Author from './Pages/Author/Author'
import Details from './Pages/Details/Details'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/AddPage"} element={<AddPage/>}/>
      <Route path={"/Author"} element={<Author/>}/>
      <Route path={"/Book"} element={<Book/>}/>
      <Route path={"/Details/:id"} element={<Details/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;