import { useParams, useOutletContext } from "react-router-dom"

const Book = () => {
  const { id } = useParams()
  const obj = useOutletContext()
  return (
    <h2>
      Book {id}. {obj.hello}
    </h2>
  )
}
export default Book
