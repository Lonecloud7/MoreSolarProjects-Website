import React from "react"
import * as slideStyles2 from "./Slideshow.module.scss"
import Carousel from "react-bootstrap/Carousel"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Slideshow = () => {
  return (
    <div className={slideStyles2.Slideshow}>
      <div className={slideStyles2.Slideshow__overlay}></div>
      <div className={slideStyles2.Slideshow__backgroundImg}>
        <Carousel fade="true" touch="true" controls={false}>
          <Carousel.Item>
            <div className={slideStyles2.Slideshow__ImgContainer}>
              <StaticImage
                src="./landscape.jpg"
                loading="eager"
                quality={60}
                placeholder="blurred"
                layout="fullWidth"
                alt=""
                className={slideStyles2.Slideshow__Img}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={slideStyles2.Slideshow__ImgContainer}>
              <StaticImage
                src="./landscape1.jpg"
                loading="eager"
                quality={60}
                placeholder="blurred"
                layout="fullWidth"
                alt=""
                className={slideStyles2.Slideshow__Img}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={slideStyles2.Slideshow__ImgContainer}>
              <StaticImage
                src="./landscape2.jpg"
                loading="eager"
                quality={60}
                placeholder="blurred"
                layout="fullWidth"
                alt=""
                className={slideStyles2.Slideshow__Img}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={slideStyles2.Slideshow__ImgContainer}>
              <StaticImage
                src="./landscape3.jpg"
                loading="eager"
                placeholder="blurred"
                quality={60}
                layout="fullWidth"
                alt=""
                className={slideStyles2.Slideshow__Img}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={slideStyles2.Slideshow__ImgContainer}>
              <StaticImage
                src="./landscape4.jpg"
                loading="eager"
                placeholder="blurred"
                quality={60}
                layout="fullWidth"
                alt=""
                className={slideStyles2.Slideshow__Img}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={slideStyles2.Slideshow__ImgContainer}>
              <StaticImage
                src="./landscape5.jpg"
                loading="eager"
                placeholder="blurred"
                layout="fullWidth"
                quality={60}
                alt=""
                className={slideStyles2.Slideshow__Img}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={slideStyles2.Slideshow__ImgContainer}>
              <StaticImage
                src="./landscape6.jpg"
                loading="eager"
                placeholder="blurred"
                quality={60}
                layout="fullWidth"
                alt=""
                className={slideStyles2.Slideshow__Img}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={slideStyles2.Slideshow__content}>
        <div className={slideStyles2.Slideshow__text}>
          <h1>MORE SOLAR PROJECTS LTD </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ducimus
            sit aliquam eveniet odit.
          </p>
        </div>

        <div className={slideStyles2.Slideshow__button}>
          <Link to={"/Operations"}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slideshow
