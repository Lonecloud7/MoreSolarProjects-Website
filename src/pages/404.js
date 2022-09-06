import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import * as styles from "../components/index.module.scss"

const NotFoundPage = () => {
  const pageName = "404"
  return (
    <Layout>
      <Seo title={pageName} />
      <div className={styles.pageText}>
        <div className={styles.pageText__content}>
          <div className={styles.pageText__header}>
            <h2>404: Page Not Found</h2>
            <p>We're sorry, this page does not exist.</p>
            <p>
              {" "}
              <Link
                style={{ textDecoration: "underline", color: "inherit" }}
                to={"/"}
              >
                Click here
              </Link>{" "}
              to return to back to the homepage.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default NotFoundPage
