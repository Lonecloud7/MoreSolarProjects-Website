import React from "react"
import * as styles from "./AvatarCard.module.scss"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const AvatarCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: {
            nin: [
              "contactus"
              "heading"
              "hero"
              "hero2"
              "leadership"
              "operation"
              "sustainability"
            ]
          }
        }
      ) {
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

  const boardMembers = [
    {
      img: data.allFile.edges[0].node,
      name: "Lorem ipsum.",
      title: "CEO",
    },
    {
      img: data.allFile.edges[1].node,
      name: "Lorem ipsum.",
      title: "Accountant",
    },
    {
      img: data.allFile.edges[2].node,
      name: "Lorem ipsum.",
      title: "General Counsel",
    },
    {
      img: data.allFile.edges[3].node,
      name: "Lorem ipsum.",
      title: "Non-Executive Director",
    },
    {
      img: data.allFile.edges[4].node,
      name: "Lorem ipsum.",
      title: "Executive Director, Commercial/CFO",
    },
    {
      img: data.allFile.edges[5].node,
      name: "Lorem ipsum.",
      title: "Chairman",
    },
  ]

  //GRAPH QL PATH FOR IMAGE DISPLAY
  // const image = getImage(data.allFile.edges[0].node)
  return (
    <>
      <div className={styles.Grid}>
        {boardMembers.map((BoardData, index) => {
          const { img, name, title } = BoardData

          const image = getImage(img)

          return (
            <div className={styles.Avatar} key={name}>
              <div className={styles.Avatar__content}>
                <Link to={"/Leadership"}>
                  <div className={styles.Avatar__imgContainer}>
                    <GatsbyImage
                      image={image}
                      loading="eager"
                      alt=""
                      className={styles.Avatar__img}
                      key={index}
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
