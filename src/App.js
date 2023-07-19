import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import People from "./pages/People"
import NotFound from "./pages/NotFound"
import { Route, Routes } from "react-router-dom"
import Paths from "./pages/Paths"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/paths" element={<Paths />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
