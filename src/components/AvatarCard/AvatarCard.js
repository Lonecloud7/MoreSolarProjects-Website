import React from "react"
import * as styles from "./AvatarCard.module.scss"

const AvatarCard = ({ img }) => {
  return (
    <>
      <div className={styles.Avatar}>
        <div className={styles.Avatar__content}>
          <div className={styles.Avatar__img}>
            <img src={require("./avatar2.jpg").default} alt="" />
          </div>
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
