import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import like from "../assets/like.svg"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <footer className="footer">
      <span>
        {new Date().getFullYear()} © {data.site.siteMetadata.title} - Tous
        droits réservés - propulsé avec Gatsby
        <img className="like" src={like} alt="with love" />
      </span>
      <div className="icons">
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
