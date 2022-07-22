import React from "react"
import * as styles from "./AvatarCard.module.scss"
import { Link } from "gatsby"

const AvatarCard = ({ img }) => {
  return (
    <>
      <div className={styles.Avatar}>
        <div className={styles.Avatar__content}>
          <Link to={"/Leadership"}>
            <div className={styles.Avatar__imgContainer}>
              <div
                className={styles.Avatar__img}
                style={{
                  backgroundImage: `url(${require("./avatar2.jpg").default})`,
                }}
              ></div>
              {/* <img src={require("./avatar2.jpg").default} alt="" style={{backgroundPosition:"center"}}/> */}
            </div>
          </Link>

          <div className={styles.Avatar__name}>
            <p>Lorem ipsum.</p>
          </div>
          <div className={styles.Avatar__title}>
            <p>Some Guy In The Building</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AvatarCard
