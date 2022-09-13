import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"
import Hero_img from "../components/Hero_img/Hero_img"
import PageCard from "../components/Page Card/PageCard"
import { useState } from "react"

const IndexPage = () => {

  const [Word, SetWord] = useState("")
  const pageName = "Home"
  return (
    <Layout>
      <Seo title={pageName} />
      <Hero_img />

      <PageCard />
      <div
        className={styles.textCenter}
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      ></div>
      <div className={styles.FlexCard}>
        <div className={styles.FlexCard__content}>
          <div className={styles.FlexCard__content__text}>
            <h2>Lorem ipsum dolor</h2>
            <article>
              sit amet consectetur adipisicing elit. Voluptates esse incidunt
              officia vero consequuntur enim laboriosam harum fugit atque
              itaque?vero consequuntur enim
            </article>
          </div>
          <div className={styles.FlexCard__content__imgContainer}>
            <StaticImage
              src="../images/shots/landscape5.jpg"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
              className={styles.FlexCard__content__img}
            />
          </div>

          <div className={styles.FlexCard__content__imgContainer}>
            <StaticImage
              src="../images/shots/employee2.jpg"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
              className={styles.FlexCard__content__img}
            />
          </div>
          <div className={styles.FlexCard__content__text}>
            <h2>Lorem ipsum dolor</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates esse incidunt officia vero consequuntur enim laboriosam
              harum fugit atque itaque?vero consequuntur enim
            </article>
          </div>
        </div>
      </div>

      <div className={styles.newsletter}>
        {/* <div className={styles.newsletter__overlay}></div> */}
        <form onSubmit={e => e.preventDefault()} className={styles.newsinput}>
          <div>
            <h3>{Word}</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam!
            </p>
            <input type="text" placeholder="Your Email here" value={Word} onChange={e => {SetWord(e.target.value)}}/>
            <br />
            <br />
            <input type="submit" className={styles.newsbtn} />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default IndexPage
