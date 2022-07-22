import React from "react"
import * as styles from "./PageCard.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PageCard = ({ data }) => {
  return (
    <div>
      <ul className={styles.list}>
        {data.map(link => (
          <li key={link.url} className={styles.listItem}>
            <Link className={styles.title} to={`${link.url}`}>
              <img src={link.imgUrl} alt="" className={styles.cardImg} />
              <StaticImage
                src={link.imgUrl}
                loading="eager"
                width={1920}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
                className={styles.cardImg}
              />
              {link.text}
            </Link>
            <p className={styles.text}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageCard
