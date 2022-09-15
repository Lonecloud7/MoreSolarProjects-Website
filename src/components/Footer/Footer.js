import React from "react"
import * as styles from "./Footer.module.scss"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div>
      <footer
      // style={{
      //   marginTop: `var(--space-5)`,
      //   fontSize: `var(--font-sm)`,
      //   margin: `0 auto`,
      // }}
      >
        <div className={styles.footercont}>
          {/* <div>
                <img src="img/logofoot.jpg" alt="" id="logo2">
            </div> */}
          <div className={styles.border}></div>

          <div className={styles.footerlinks}>
            <div className={styles.symbol}>
              <ul>
                <li className={styles.foothead}>About us</li>
                <li>
                  <p>
                    More Solar Projects Ltd, MSPL was founded in 2021 to provide
                    bespoke Occupational Health, Safety, Industrial Security,
                    Environmental, Quality Assurance and Quality Control and
                    Sustainable Community Development, SCD consultancy services
                    to the oil and gas industry, as well as explore ventures
                    within the UN SDG #7 value chain quis.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.quickLinks}>
              <ul>
                <li className={styles.foothead}>Quick Links</li>
                <li>
                  <Link to="/Aboutus">About us</Link>
                </li>
                <li>
                  <Link to="/Leadership">Leadership</Link>
                </li>
                <li>
                  <Link to="/Operations">Operations</Link>
                </li>
                <li>
                  <Link to="/Contactus">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className={styles.address}>
              <ul>
                <li className={styles.foothead}>More Solar Projects Ltd</li>
                <li>
                  <p>Adebola House 228A</p>
                </li>
                <li>
                  <p>Awolowo Road, Ikoyi Lagos</p>
                </li>
                <li>
                  <p>Nigeria</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
