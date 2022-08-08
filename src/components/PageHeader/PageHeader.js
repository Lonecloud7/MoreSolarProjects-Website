import React from "react"
import * as styles from "./PageHeader.module.scss"

const PageHeader = ({ title, img}) => {
  return (
    <>
      <div className={styles.Header} >
        <div className={styles.Header__overlay}></div>
        <div className={styles.Header__content} id={"operations"}>
          <div className={styles.Header__text}>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageHeader
