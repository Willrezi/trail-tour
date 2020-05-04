import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaAlignRight, FaWindowClose } from "react-icons/fa"

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(open => !open)
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="header">
      <div className="nav-header">
        <h3 className="header-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h3>
        <button type="button" className="logo-btn" onClick={toggleNav}>
          {open ? (
            <FaWindowClose className="logo-icon" />
          ) : (
            <FaAlignRight className="logo-icon" />
          )}
        </button>
      </div>
      <ul className={open ? "nav-list show-nav" : "nav-list"}>
        <li>
          <Link to="/tours">Nos balades</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
        <li>
          <Link to="/contact">Contactez-nous</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
