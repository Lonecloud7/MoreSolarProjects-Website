import React from 'react'
import * as styles from "./Slideshow.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Slideshow = () => {

    const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "slideshow" } }) {
        edges {
          node {
            base
            relativePath
            id
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 70
                blurredOptions: { width: 100 }
              )
            }
          }
        }
      }
    }
  `)

  return (
   <>
        {data.allFile.edges.map(({node}) => {

            return(
                <div key={node.id}>
                    <p>{node.base}</p>
                </div>
            )
        })}
   </>
  )
}

export default Slideshow