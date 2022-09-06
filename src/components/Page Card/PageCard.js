import React from "react"
import * as styles from "./PageCard.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const PageCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: {
            nin: [
              "avatar2"
              "avatar3"
              "avatar4"
              "avatar5"
              "avatar6"
              "avatar7"
              "gatsby-icon"
              "heading"
              "hero"
              "hero2"
              "contactus"
              
            ]
          }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(width:400)
            }
          }
        }
      }
    }
  `)


  const links = [
    {
      text: "Who We Are",
      url: "/Aboutus",
      imgUrl: data.allFile.edges[4].node,
      description:
        "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    },
    {
      text: "Operations",
      url: "/Operations",
      imgUrl: data.allFile.edges[2].node,
      description:
        "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
    },
    // {
    //   text: "Contact us",
    //   url: "/Contactus",
    //   imgUrl:
    //     data.allFile.edges[3].node,
    //   description:
    //     "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    // },
    {
      text: "Leadership",
      url: "/Leadership",
      imgUrl: data.allFile.edges[3].node,
      description:
        "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    },
  ]

  return (
    <div>
      <ul className={styles.list}>
        {links.map((link, index) => {
          const { imgUrl, text, description, url } = link

          const img = getImage(imgUrl)
          return (
            <li key={url} className={styles.listItem}>
              <Link className={styles.title} to={`${url}`}>
                <div className={styles.cardImg}>
                  <GatsbyImage
                    image={img}
                    loading="eager"
                    width={1920}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                    className={styles.img}
                  />
                </div>

                {text}
              </Link>
              <p className={styles.text}>{description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PageCard
