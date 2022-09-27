import React from "react"
import * as slideStyles from "./Slideshow.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"
import { Link } from "gatsby"


const SlideshowMobile = () => {
  
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
                width: 768
                height: 1350
                transformOptions: {cropFocus: CENTER, fit: COVER}
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
        <Carousel touch="true">
          {data.allFile.edges.map(({ node }) => {
            const image = getImage(node.childImageSharp.gatsbyImageData)
            return (
              <Carousel.Item>
                <GatsbyImage image={image} alt={node.base} />

                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
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

export default SlideshowMobile
