import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import AvatarCard from "../components/AvatarCard/AvatarCard"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Leadership = () => {
  const pageName = "Leadership"

  return (
    <>
      <Layout>
      <Seo title="Leadership" />
        <PageHeader title={pageName} />
        <div className={styles.pageNav}>
          <Link to="/">Home</Link>/<Link to="/Leadership">{pageName}</Link>
        </div>

        <div className={styles.pageText__flex}>
          <div className={styles.FlexCard__content__flex}>
            <div className={styles.FlexCard__content__text}>
              <h2>Lorem ipsum dolor</h2>
              <p>
                sit amet consectetur adipisicing elit. Voluptates esse incidunt
                officia vero consequuntur enim laboriosam harum fugit atque
                itaque?vero consequuntur enim
              </p>
            </div>
            <div className={styles.FlexCard__content__imgContainer}>
              <StaticImage
                src="../images/avatar5.jpg"
                loading="eager"
                width={400}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                className={styles.FlexCard__content__imgRound}
              />
            </div>
          </div>
        </div>

        <div className={styles.pageText}>
          <div className={styles.pageText__content}>
            <div className={styles.pageText__header}>
              <h2>Meet Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                nobis repellendus. Laudantium, totam!
              </p>
            </div>
            <div className={styles.pageText__passage}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis dolorem eum, harum quisquam quam quo nobis consequatur
                aliquid eligendi sapiente illo? Veniam ipsum recusandae ipsa
                veritatis tenetur laborum repellendus incidunt. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Dolores saepe
                perspiciatis qui, nihil quaerat iste exercitationem facilis at
                quibusdam maxime similique aliquam, fuga doloremque! Dolore
                natus minima ipsam fuga quis.
                <i>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum nemo veniam temporibus odio ipsam. Similique, aliquam
                  numquam.
                </i>
              </p>
            </div>
          </div>
        </div>
        <AvatarCard />
      </Layout>
    </>
  )
}

export default Leadership
