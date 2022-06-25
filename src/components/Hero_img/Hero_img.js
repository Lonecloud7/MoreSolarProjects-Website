import React from "react"
import { Link } from "gatsby"
import * as classes from "./Hero_img.module.scss"

const Hero_img = () => {
  return (
    <>
      <div className={classes.Hero}>
        <div className={classes.Hero__content}>
          <div className={classes.Hero__text}>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              ducimus sit aliquam eveniet odit.
            </p>
          </div>
          <div className={classes.Hero__button}>
            <Link>
              <button>Hero button</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero_img
