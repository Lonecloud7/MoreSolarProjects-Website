import React from "react"
import * as styles from "./PageCard.module.scss"
import { Link } from "gatsby"

const PageCard = ({ data }) => {
  return (
    <div>
      <ul className={styles.list}>
        {data.map(link => (
          <li key={link.url} className={styles.listItem}>
            <Link className={styles.listItemLink} to={`${link.url}`}>
              <img src={link.imgUrl} alt="" className={styles.cardImg}/>
              {link.text}
            </Link>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageCard
