import React from "react"
import * as styles from "./PageCard.module.scss"

const PageCard = () => {
  const links = [
    {
      text: "Tutorial",
      url: "https://www.gatsbyjs.com/docs/tutorial",
      description:
        "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    },
    {
      text: "Examples",
      url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
      description:
        "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
    },
    {
      text: "Plugin Library",
      url: "https://www.gatsbyjs.com/plugins",
      description:
        "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    },
    {
      text: "Build and Host",
      url: "https://www.gatsbyjs.com/cloud",
      description:
        "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    },
  ]

  const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

  return (
    <div>
      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text}
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageCard
