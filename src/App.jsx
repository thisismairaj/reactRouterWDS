import "./App.css"
import { Route, Link, Routes } from "react-router-dom"
import Booklist from "./pages/Booklist"
import Book from "./pages/Book"
import NewBook from "./pages/NewBook"
import NoFound from "./pages/NoFound"
import BookLayout from "./BookLayout"
import BookRoutes from "./BookRoutes"

function App() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra content</h1>}></Route>
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </>
  )
}

export default App
