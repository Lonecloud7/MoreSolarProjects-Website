import React from "react"
import * as styles from "./AvatarCard.module.scss"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const AvatarCard = ({ data }) => {
  const image = "../images/leadership/avatar3.jpg"
  return (
    <>
      <div className={styles.Grid}>
        {data.map((data, index) => {
          const { img, name, title } = data
          return (
            <div className={styles.Avatar} key={img}>
              <div className={styles.Avatar__content}>
                <Link to={"/Leadership"}>
                  <div className={styles.Avatar__imgContainer}>
                    {/* <img
                    src={require("./avatar2.jpg").default}
                    alt=""
                    style={{ backgroundPosition: "center" }}
                  /> */}
                    <StaticImage
                      src={image}
                      loading="eager"
                      width={1920}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt=""
                      style={{ marginBottom: `var(--space-3)` }}
                      className={styles.Avatar__img}
                    />
                  </div>
                </Link>

                <div className={styles.Avatar__name}>
                  <p>{name}</p>
                </div>
                <div className={styles.Avatar__title}>
                  <p>{title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AvatarCard
