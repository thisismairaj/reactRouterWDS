import { Route, Routes } from "react-router-dom"
import Booklist from "./pages/Booklist"
import NewBook from "./pages/NewBook"
import Book from "./pages/Book"
import BookLayout from "./BookLayout"

const BookRoutes = () => {
  return (
    <Routes>
      <Route element={<BookLayout />} />
      <Route index element={<Booklist />} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
    </Routes>
  )
}
export default BookRoutes
