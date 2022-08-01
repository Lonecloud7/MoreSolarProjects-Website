import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Operations = () => {
  const pageName = "Operations"
  return (
    <Layout>
      <PageHeader title={pageName} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Operations">{pageName}</Link>
      </div>
      <div className={styles.pageText__flexCard}>
        <div className={styles.FlexCard__content}>
          <div className={styles.FlexCard__content__text}>
            <h2>Lorem ipsum dolor</h2>
            <article>
              sit amet consectetur adipisicing elit. Voluptates esse incidunt
              officia vero consequuntur enim laboriosam harum fugit atque
              itaque?vero consequuntur enim
            </article>
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
        </div>
      </div>

      <div className={styles.pageText}>
        <div className={styles.pageText__content}>
          <div className={styles.pageText__header}>
            <h2>Meet Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
              nobis repellendus. Laudantium, totam!Lorem Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Molestias temporibus doloremque
              distinctio fuga 
            </p>
          </div>
        </div>
        <div className={styles.pageText__passage}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            dolorem eum, harum quisquam quam quo nobis consequatur aliquid
            eligendi sapiente illo? Veniam ipsum recusandae ipsa veritatis
            tenetur laborum repellendus incidunt. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolores saepe perspiciatis qui, nihil
            quaerat iste exercitationem facilis at quibusdam maxime similique
            aliquam, fuga doloremque! Dolore natus minima ipsam fuga quis.
            <i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              nemo veniam temporibus odio ipsam. Similique, aliquam numquam.
            </i>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Operations
