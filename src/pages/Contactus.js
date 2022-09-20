import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"
import Slideshow from "../components/Slideshow/Slideshow"
import Seo from "../components/seo"

const Contactus = () => {
  const pageName = "Contact us"
  return (
    <Layout>
      <Seo title={pageName} />
      <PageHeader title={"Contact us"} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Contactus">{pageName}</Link>
      </div>

      <div className={styles.pageText}>
        <div className={styles.pageFlex}>
          <div className={styles.pageText__header}>
            <h2>Company Office Address</h2>
            <div className={styles.pageText__passage}>
              <p>
                Adebola House 228A <br /> Awolowo Road <br /> Ikoyi Lagos <br />
                Nigeria
              </p>
            </div>
            <div className={styles.pageText__header}>
              <h2>Telephone</h2>
              <div div className={styles.pageText__passage}>
                <p>+234 080 2475 9034</p>
              </div>
            </div>
            <div className={styles.pageText__header}>
              <h2>Email</h2>
              <div div className={styles.pageText__passage}>
                <p>Fakeemail2@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.pageText__header}>
            <h2>Search Our Site</h2>
            <div className={styles.pageText__passage}>
              <p>
                Before contacting us, you may like to try this site’s ‘search’
                tool or use the site map to find out more about our business. If
                you do not find the information you are looking for, please
                contact us via these routes.
              </p>
            </div>

            <h2>Media</h2>
            <div className={styles.pageText__passage}>
              <p>
                For media enquiries, please send an email fakeemail@johndoe.com
                and a member of our team will contact you.
              </p>
            </div>
            <h2>Enquiries About Our Operations</h2>
            <div className={styles.pageText__passage}>
              <p>
                For enquiries about operations, please send an email
                info@first-epdc.com and a member of our team will contact you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Slideshow />
    </Layout>
  )
}

export default Contactus
