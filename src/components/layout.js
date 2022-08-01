import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import "./layout.css"
import "../Styles/Styles.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      <div
      >
        <main>{children}</main>
        
        <Footer />
      </div>
    </>
  )
}


export default Layout
