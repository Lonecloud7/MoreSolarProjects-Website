import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"

const Operations = () => {
  const pageName = "Operations"
  return (
    <Layout>
      <PageHeader title={"Operations"} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Operations">{pageName}</Link>
      </div>
    </Layout>
  )
}

export default Operations
