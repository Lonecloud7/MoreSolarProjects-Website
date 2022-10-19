import React from "react"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import * as styles from "./Newsletter.module.scss"
import { useState } from "react"

function Newsletter() {
  const [focused, setFocused] = useState(false)
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

  const handleFocus = e => {
    setFocused(true)
  }

  return (
    <>
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
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              id={"textArea"}
              required
              pattern="^[A-Za-z0-9]{1,20}$"
              onBlur={handleFocus}
              focused={focused}
            />
            <span>error email message</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              name="user_email"
              id="textArea"
              required
              onBlur={handleFocus}
              focused={focused}
            />
            <span>error email message</span>
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Message"
              id="textArea"
              required
              pattern="^[A-Za-z0-9]{10,200}$"
              onBlur={handleFocus}
              focused={focused}
            />
            <span>error email message</span>

            <input type="submit" value="Send" className={styles.newsbtn} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Newsletter
