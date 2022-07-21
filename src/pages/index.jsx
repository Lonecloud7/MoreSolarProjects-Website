import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"
import Hero_img from "../components/Hero_img/Hero_img"
import PageCard from "../components/Page Card/PageCard"
  

const links = [
  {
    text: "Leadership",
    url: "/Leadership",
    imgUrl:
      "https://alexis.lindaikejisblog.com/photos/shares/5d32bf0a7cd06.PNG",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Operations",
    url: "/Operations",
    imgUrl: "https://guardian.ng/wp-content/uploads/2020/02/Drillers.jpg",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  // {
  //   text: "Contact us",
  //   url: "/Contactus",
  //   imgUrl:
  //     "https://guardian.ng/wp-content/uploads/2016/05/Customer-Service.jpg",
  //   description:
  //     "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  // },
  {
    text: "Sustainabilty",
    url: "/Operations",
    imgUrl: "https://www.nipc.gov.ng/wp-content/uploads/2019/04/gas-plant.jpg",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero_img />

    <PageCard data={links} />
    <div
      className={styles.textCenter}
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      {/* <StaticImage
        src="../images/heading.jpg"
        loading="eager"
        width={1920}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
    </div>
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
        <div className={styles.FlexCard__content__img}>
          <StaticImage
            src="../images/heading.jpg"
            loading="eager"
            width={1920}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>

        <div className={styles.FlexCard__content__img}>
          <StaticImage
            src="../images/heading.jpg"
            loading="eager"
            width={1920}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <div className={styles.FlexCard__content__text}>
          <h2>Lorem ipsum dolor</h2>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            esse incidunt officia vero consequuntur enim laboriosam harum fugit
            atque itaque?vero consequuntur enim
          </article>
        </div>
      </div>
    </div>

    <div className={styles.newsletter}>
      <form onSubmit={e => e.preventDefault()} className={styles.newsinput}>
        <div>
          <h3>SUBSRCRIBE OUR NEWSLETTER</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam!
          </p>
          <input type="text" placeholder="Your Email here" />
          <br />
          <br />
          <input type="submit" className={styles.newsbtn} />
        </div>
      </form>
    </div>
  </Layout>
)

export default IndexPage
