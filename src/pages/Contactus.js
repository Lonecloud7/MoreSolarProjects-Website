import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Contactus = () => {
  const pageName = "Contact us"
  return (
    <Layout>
    <Seo title="Contact Us" />
      <PageHeader title={"Contact us"} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Contactus">{pageName}</Link>
      </div>

      <div className={styles.pageText}>
        <div className={styles.pageFlex}>
          <div className={styles.pageText__header}>
            <h2>Lorem ipsum dolor sit</h2>
            <div className={styles.pageText__passage}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae est eos qui, ab atque laudantium at ipsa praesentium
                itaque. Molestias, quo nihil. Velit cum commodi, corporis
                voluptatibus est dolor provident!
              </p>
            </div>
          </div>
          <div className={styles.pageText__header}>
            <h2>Lorem ipsum dolor sit</h2>
            <div className={styles.pageText__passage}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae est eos qui, ab atque laudantium at ipsa praesentium
                itaque. Molestias, quo nihil. Velit cum commodi, corporis
                voluptatibus est dolor provident!
              </p>
            </div>

            <h2>Lorem ipsum dolor sit</h2>
            <div className={styles.pageText__passage}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae est eos qui, ab atque laudantium at ipsa praesentium
                itaque. Molestias, quo nihil. Velit cum commodi, corporis
                voluptatibus est dolor provident!
              </p>
            </div>
            <h2>Lorem ipsum dolor sit</h2>
            <div className={styles.pageText__passage}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae est eos qui, ab atque laudantium at ipsa praesentium
                itaque. Molestias, quo nihil. Velit cum commodi, corporis
                voluptatibus est dolor provident!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contactus
