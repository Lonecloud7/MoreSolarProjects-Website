import React from "react"
import * as styles from "./AvatarCard.module.scss"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import image from "./avatar2.jpg"

const boardMembers = [
  {
    img: "https://marketingedge.com.image/wp-content/uploads/2022/02/E77ACD13-5B1E-43EC-B703-557419BACDE1.jpeg",
    name: "Lorem ipsum.",
    title: "CEO",
  },
  {
    img: "https://marketingedge.com.ng/wp-content/uploads/2021/06/Dayo-Adefila.jpg",
    name: "Lorem ipsum.",
    title: "Accountant",
  },
  {
    img: "https://nairametrics.com/wp-content/uploads/2021/11/Olu-Akanmu.jpg",
    name: "Lorem ipsum.",
    title: "General Counsel",
  },
  {
    img: "../images/leadership/avatar5.jpg",
    name: "Lorem ipsum.",
    title: "Non-Executive Director",
  },
  {
    img: "../images/leadership/avatar6.jpg",
    name: "Lorem ipsum.",
    title: "Executive Director, Commercial/CFO",
  },
  {
    img: "../images/leadership/avatar7.jpg",
    name: "Lorem ipsum.",
    title: "Chairman",
  },
]


const AvatarCard = () => {
  return (
    <>
      <div className={styles.Grid}>
        {boardMembers.map((data, index) => {
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
                      src={img}
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
