import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("../views/home"))
const Detail = React.lazy(() => import("../views/detail"))
const Entire = React.lazy(() => import("@/views/entire"))
const Demo = React.lazy(() => import("@/views/Demo"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
    auth: true
  },
  {
    path: "/home",
    element: <Home />,
    auth: false
  },
  {
    path: "/detail",
    element: <Detail />,
    auth: false
  },
  {
    path: "/entire",
    element: <Entire />,
    auth: false
  },
  {
    path: "/demo",
    element: <Demo />,
    auth: false
  }
]

export default routes