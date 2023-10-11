import { useParams, useOutletContext } from "react-router-dom"

const Book = () => {
  const { id } = useParams()
  const obj = useOutletContext()
  console.log(obj)
  return <h2>Book {id}</h2>
}
export default Book
