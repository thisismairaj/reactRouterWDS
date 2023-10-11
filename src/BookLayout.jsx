import { Outlet, Link } from "react-router-dom"

const BookLayout = () => {
  return (
    <>
      <Outlet context={{ hello: "world" }} />
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/3">Book 3</Link>
    </>
  )
}
export default BookLayout
