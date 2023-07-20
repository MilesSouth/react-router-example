import Nav from "../components/Nav"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Paths from "../pages/Paths"
import People from "../pages/People"
import PersonDetail from "../pages/PersonDetail"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"
import Footer from "../components/Footer"
import Fullstack from "../pages/Fullstack"
import Aws from "../pages/Aws"
import React from "../pages/React"
import Next from "../pages/Next"
import PrivateRouter from "./PrivateRouter"
import Login from "../pages/Login"
const AppRouter = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/paths" element={<Paths />}>
          <Route index element={<Fullstack />} />
          <Route path="fullstack" element={<Fullstack />}>
            <Route index element={<React />} />
            <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/people" element={<People />}></Route>
          <Route path="/people/:id" element={<PersonDetail />}></Route>
        </Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default AppRouter
