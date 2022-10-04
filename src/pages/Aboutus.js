import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Aboutus = () => {
  const pageName = "About us"
  return (
    <Layout>
      <Seo title={pageName} />
      <PageHeader title={"About us"} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Aboutus">{pageName}</Link>
      </div>

      <div className={styles.pageText}>
        <div className={styles.pageText__content}>
          {/* <div className={styles.pageText__header}>
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
              nobis repellendus. Laudantium, totam!
            </p>
          </div>

          <div className={styles.pageText__img}>
            <StaticImage
              src="../images/shots/employee.jpg"
              loading="eager"
              width={650}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>

          <div className={styles.pageText__passage}>
            <p>
              More Solar Projects Ltd, MSPL was founded in 2021 to provide
              bespoke Occupational Health, Safety, Industrial Security,
              Environmental, Quality Assurance and Quality Control and
              Sustainable Community Development, SCD consultancy services to the
              oil and gas industry, as well as explore ventures within the UN
              SDG #7 value chain quis.
              <b>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                nemo veniam temporibus odio ipsam. Similique, aliquam numquam.
              </b>
            </p>
          </div> */}

          {/* <div className={styles.pageText__list}>
            <ul>
              <li className={styles.pageText__listHead}>List Head</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className={styles.pageText__flex}>
        <div className={styles.FlexCard__content__flex}>
          <div className={styles.FlexCard__content__text}>
            <h2>Who We Are</h2>
            <p>
              More Solar Projects Ltd, MSPL was founded in 2021 to provide
              bespoke Occupational Health, Safety, Industrial Security,
              Environmental, Quality Assurance and Quality Control and
              Sustainable Community Development, SCD consultancy services to the
              oil and gas industry, as well as explore ventures within the UN
              SDG #7 value chain quis.
            </p>
          </div>
          <div className={styles.FlexCard__content__imgContainer}>
            <StaticImage
              src="../images/shots/machine3.jpg"
              loading="eager"
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Aboutus
