import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
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
      <h3 className="header-title">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h3>
      <ul className="nav-list">
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
