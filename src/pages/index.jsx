import * as React from "react"
import { useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"
import PageCard from "../components/Page Card/PageCard"
import Slideshow2 from "../components/Slideshow/Slideshow"
// import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

const IndexPage = () => {
  //EFFECT ATTEMPT TO SWITCH BTW 2 HERO COMPONENTS

  // const [value, setValue] = useState(false)

  // const [size, setSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // })

  // useEffect(() => {
  //   const handleSizeChange = () => {
  //     setSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     })
  //   }
  //   window.addEventListener("resize", handleSizeChange)

  //   return () => window.removeEventListener("resize", handleSizeChange)
  // }, [])

  // useEffect(() => {
  //   if (size.width < 768 && value) {
  //     setValue(false)
  //   }
  //   if (size.width > 768 && value == false) {
  //     setValue(true)
  //   }
  // }, [size.width])

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_yfoiw49",
        "template_86iijoq",
        form.current,
        "IPOrNQQW6PAI-iSTr"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  const pageName = "Home"
  return (
    <Layout>
      <Seo title={pageName} />
      <Slideshow2 />

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
          <div className={styles.FlexCard__textFlex}>
            <div className={styles.FlexCard__content__text}>
              <h2>Lorem ipsum dolor</h2>
              <article>
                sit amet consectetur adipisicing elit. Voluptates esse incidunt
                officia vero consequuntur enim laboriosam harum fugit atque
                itaque?vero consequuntur enim
              </article>
            </div>
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
          <div className={styles.FlexCard__textFlex}>
            <div className={styles.FlexCard__content__text}>
              <h2>Lorem ipsum dolor</h2>
              <article>
                sit amet consectetur adipisicing elit. Voluptates esse incidunt
                officia vero consequuntur enim laboriosam harum fugit atque
                itaque?vero consequuntur enim
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT US FORM! POWERED WITH EMAILJS SERVICE!! */}

      <div className={styles.newsletter}>
        <div className={styles.newsletter__overlay}></div>
        <div className={styles.newsletter__content}>
          <div className={styles.newsletter__heading}>
            <h3>Contact Us!</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam!
            </p>
          </div>
          <form
            onSubmit={sendEmail}
            className={styles.newsletter__form}
            ref={form}
          >
            {/* <div>
              Fields marked with an <span>*</span> are required
            </div> */}
            <label>
              Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              id={"textArea"}
              required
              pattern="^[A-Za-z0-9]{1,20}$"
            />
            <span>error email message</span>
            <label>
              Email
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              name="user_email"
              id="textArea"
              required
            />
            <span>error email message</span>
            <label>
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Message"
              id="textArea"
              required
              pattern="^[A-Za-z0-9]{10,200}$"
            />
            <span>error email message</span>

            <input type="submit" value="Send" className={styles.newsbtn} />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
