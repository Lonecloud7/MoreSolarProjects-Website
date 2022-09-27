import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import "./layout.css"
import "../Styles/Styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
