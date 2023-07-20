import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import NotFound from "./NotFound"
import spinner from "../img/Spinner-2.gif"
const PersonDetail = () => {
  // const { state: person } = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()

  const [person, setPerson] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  console.log({ id })

  const getPerson = () => {
    axios(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setPerson(res.data.data)
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    getPerson()
  }, [])

  if (error) {
    return <NotFound />
  } else if (loading)
    return (
      <div className="text-center mt-4">
        <img src={spinner} alt="" />
      </div>
    )
  // console.log(person
  return (
    <div className="container text-center">
      <h3>
        {person?.first_name}
        {person?.last_name}
      </h3>
      <img src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="btn btn-info" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  )
}

export default PersonDetail
