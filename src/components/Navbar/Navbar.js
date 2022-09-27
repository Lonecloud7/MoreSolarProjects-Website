import * as React from "react"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"
import * as classes from "./Navbar.module.scss"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleSizeChange = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleSizeChange)

    return () => window.removeEventListener("resize", handleSizeChange)
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const onChange = () => {
    setMenuOpen(prev => !prev)
  }
  const navLinks = [
    {
      title: "About Us",
      url: "/Aboutus",
    },
    {
      title: "Leadership",
      url: "/Leadership",
    },
    {
      title: "Operations",
      url: "/Operations",
    },
    {
      title: "Contact Us",
      url: "/Contactus",
    },
  ]

  return (
    <>
      <header className={classes.Navbar}>
        <div className={classes.Navbar__content}>
          <div className={classes.Navbar__logo}>
            <Link to={`/`}>
              <StaticImage
                src="./logo2.png"
                alt=""
                loading="eager"
                placeholder="blurred"
                width={50}
                quality={95}
              />
            </Link>
          </div>

          <div
            className={`${classes.Navbar__links} ${
              menuOpen ? classes.isMenu : ""
            }`}
          >
            <ul>
              {navLinks.map(links => {
                const { title, url } = links
                return (
                  <>
                    <li key={url}>
                      <Link to={url}>{title}</Link>
                    </li>
                    <div className={classes.border}></div>
                  </>
                )
              })}
            </ul>
          </div>

          {/* <button>action</button> */}

          <div
            className={classes.Navbar__toggle}
            onClick={() => {
              onChange()
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar