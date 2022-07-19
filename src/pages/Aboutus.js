import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"

const Aboutus = () => {
  const pageName = "About us"
  return (
    <Layout>
      <PageHeader title={"ABOUT US"} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link>{pageName}</Link>
      </div>
    </Layout>
  )
}

export default Aboutus
