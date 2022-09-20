import React from "react"
import * as styles from "./AvatarCard.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const AvatarCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "leadership"}}) {
        edges {
          node {
            base
            relativePath
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const boardMembers = [
    { id:data.allFile.edges[0].node,
      img: data.allFile.edges[0].node,
      name: data.allFile.edges[0].node.base,
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
    <div>
      <div className={styles.Grid}>
        {boardMembers.map((BoardData, index) => {
          const { img, name, title } = BoardData

          const image = getImage(img)

          return (
            <div className={styles.Avatar} key={index}>
              <div>
                <Link to={"/Leadership"} className={styles.Avatar__content}>
                  <div className={styles.Avatar__imgContainer}>
                    <GatsbyImage
                      image={image}
                      alt=""
                      className={styles.Avatar__img}
                      loading="eager"
                      placeholder="blurred"
                    />
                  </div>
                </Link>

                <div>
                  <p className={styles.Avatar__name}>{name}</p>
                  <p className={styles.Avatar__title}>{title}</p>
                </div>
                <div></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AvatarCard
