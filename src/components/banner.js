import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <div className="banner">
      <h1 className="banner-title">{data.site.siteMetadata.title}</h1>
      <h3 className="banner-description">
        {data.site.siteMetadata.description}
      </h3>
      <Link to="/tours" className="btn">
        Découvrez nos balades
      </Link>
    </div>
  )
}

export default Banner
