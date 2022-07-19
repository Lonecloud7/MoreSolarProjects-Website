import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"

const Leadership = () => {
  const pageName = "Leadership"

  return (
    <Layout>
      <PageHeader title={"Leadership"} />
      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Leadership">{pageName}</Link>
      </div>
    </Layout>
  )
}

export default Leadership
