import React from "react"
import * as slideStyles from "./Slideshow.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"
import { useState, useEffect } from "react"
import { Link } from "gatsby"


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
                width: 1920
                height: 870
                transformOptions: { fit: FILL, cropFocus: CENTER}
              )
            }
          }
        }
      }
    }
  `)

  return (
    <div className={slideStyles.Slideshow}>
      <div className={slideStyles.Slideshow__img}>
        <Carousel fade="true">
          {data.allFile.edges.map(({ node }) => {
            const image = getImage(node.childImageSharp.gatsbyImageData)
            return (
              <Carousel.Item>
                <GatsbyImage image={image} alt={node.base} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>

      <div className={slideStyles.Slideshow__content}>
        <div className={slideStyles.Slideshow__text}>
          <h1>Lorem ipsum dolor </h1>
          <h1>sit amet consectetur.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ducimus
            sit aliquam eveniet odit.
          </p>
        </div>
        <div className={slideStyles.Slideshow__button}>
          <Link to={"/Operations"}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slideshow