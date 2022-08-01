import React from "react"
import * as styles from "./AvatarCard.module.scss"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

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
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  // const image = getImage(data.allFile.edges[0].node)

  console.log(data)
  return (
    <>
      <div className={styles.Grid}>
        {boardMembers.map((BoardData, index) => {
          const { img, name, title } = BoardData

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
                    {data.allFile.edges.map((img, index) => {
                      const image = getImage(img.node)
                      return (
                        <GatsbyImage
                          image={image}
                          loading="eager"
                          alt=""
                          className={styles.Avatar__img}
                        />
                      )
                    })}
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
