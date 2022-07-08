import React from "react"
import * as styles from "./Footer.module.scss"

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
            <div id="footlist1">
              <ul>
                <li className={styles.foothead}>About us</li>
                <li>
                  <a href="">our story</a>
                </li>
                <li>
                  <a href="">media center</a>
                </li>
                <li>
                  <a href="">careers</a>
                </li>
              </ul>
            </div>
            <div id="footlist2">
              <ul>
                <li className={styles.foothead}>Support</li>
                <li>
                  <a href="">help and contact</a>
                </li>
                <li>
                  <a href="">before you book</a>
                </li>
                <li>
                  <a href="">at the airport</a>
                </li>
                <li>
                  <a href="">lost policy</a>
                </li>
                <li>
                  <a href="">customer service</a>
                </li>
              </ul>
            </div>
            <div id="footlist3">
              <ul>
                <li className={styles.foothead}>Policies</li>
                <li>
                  <a href="">conditions</a>
                </li>
                <li>
                  <a href="">delay plan</a>
                </li>
              </ul>
            </div>
            <div id="footlist4">
              <ul>
                <li className={styles.foothead}>Where we fly</li>
                <li>
                  <a href="">route map</a>
                </li>
                <li>
                  <a href="">africa</a>
                </li>
                <li>
                  <a href="">europe</a>
                </li>
                <li>
                  <a href="">asia</a>
                </li>
              </ul>
            </div>
            <div id="footlist5">
              <ul>
                <li className={styles.foothead}>Manage</li>
                <li>
                  <a href="">check-in</a>
                </li>
                <li>
                  <a href="">manage your booking</a>
                </li>
                <li>
                  <a href="">flight status</a>
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
