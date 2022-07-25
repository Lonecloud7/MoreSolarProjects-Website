import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import AvatarCard from "../components/AvatarCard/AvatarCard"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"

const Leadership = () => {
  const pageName = "Leadership"

  const boardMembers = [
    {
      img: "https://marketingedge.com.ng/wp-content/uploads/2022/02/E77ACD13-5B1E-43EC-B703-557419BACDE1.jpeg",
      name: "Lorem ipsum.",
      title: "CEO",
    },
    {
      img: "https://marketingedge.com.ng/wp-content/uploads/2021/06/Dayo-Adefila.jpg",
      name: "Lorem ipsum.",
      title: "Accountant",
    },
    {
      img: "https://nairametrics.com/wp-content/uploads/2021/11/Olu-Akanmu.jpg",
      name: "Lorem ipsum.",
      title: "General Counsel",
    },
    {
      img: "../images/leadership/avatar5.jpg",
      name: "Lorem ipsum.",
      title: "Non-Executive Director",
    },
    {
      img: "../images/leadership/avatar6.jpg",
      name: "Lorem ipsum.",
      title: "Executive Director, Commercial/CFO",
    },
    {
      img: "../images/leadership/avatar7.jpg",
      name: "Lorem ipsum.",
      title: "Chairman",
    },
  ]

  return (
    <Layout>
      <PageHeader title={"Leadership"} />
      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Leadership">{pageName}</Link>
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
              nobis repellendus. Laudantium, totam!
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

      <AvatarCard data={boardMembers} />
    </Layout>
  )
}

export default Leadership
