import React from "react"
import * as styles from "./PageHeader.module.scss"

const PageHeader = ({ title }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__text}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default PageHeader
