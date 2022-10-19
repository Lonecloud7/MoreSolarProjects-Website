import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
// import Slideshow from "../components/Slideshow/Slideshow"

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
              <span>
                Adebola House 228A <br /> Awolowo Road <br /> Ikoyi Lagos <br />
                Nigeria
              </span>
            </div>
            <div className={styles.pageText__header}>
              <h2>Telephone</h2>
              <div div className={styles.pageText__passage}>
                <span>+234 080 2475 9034</span>
              </div>
            </div>
            <div className={styles.pageText__header}>
              <h2>Email</h2>
              <div div className={styles.pageText__passage}>
                <span>Fakeemail2@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.pageText__header}>
            <h2>Search Our Site</h2>
            <div className={styles.pageText__passage}>
              <span>
                Before contacting us, you may like to try this site’s ‘search’
                tool or use the site map to find out more about our business. If
                you do not find the information you are looking for, please
                contact us via these routes.
              </span>
            </div>

            <h2>Media</h2>
            <div className={styles.pageText__passage}>
              <span>
                For media enquiries, please send an email fakeemail@johndoe.com
                and a member of our team will contact you.
              </span>
            </div>
            <h2>Enquiries About Our Operations</h2>
            <div className={styles.pageText__passage}>
              <span>
                For enquiries about operations, please send an email
                info@first-epdc.com and a member of our team will contact you.
              </span>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      {/* <Slideshow /> */}
    </Layout>
  )
}

export default Contactus
