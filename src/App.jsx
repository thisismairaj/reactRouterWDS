import "./App.css"
import { useRoutes, Link } from "react-router-dom"
import NoFound from "./pages/NoFound"

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <h1>Home</h1>,
    },
    {
      path: "/books",
      element: <h2>Books</h2>,
    },
    {
      path: "*",
      element: <NoFound />,
    },
  ])
  return (
    <>
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
      {element}
    </>
  )
}

export default App
