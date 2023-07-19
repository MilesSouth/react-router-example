import { useLocation } from "react-router-dom"

const PersonDetail = () => {
  const { state: person } = useLocation()
  console.log(person)
  return <div>Detail</div>
}

export default PersonDetail
