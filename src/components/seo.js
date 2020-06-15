import React from "react"
import propTypes from "prop-types"

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, author, description, meta }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteName
          url
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <div>
      <Helmet
        title={`${title} | ${site.siteMetadata.title}`}
        meta={[
          {
            name: "description",
            content: metaDescription,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: metaDescription,
          },
          {
            property: "og:siteName",
            content: site.siteMetadata.siteName,
          },
          {
            property: "og:url",
            content: site.siteMetadata.url,
          },
          {
            property: "og:type",
            content: "website",
          },
        ].concat(meta)}
      />
    </div>
  )
}

SEO.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  description: propTypes.string,
  meta: propTypes.arrayOf(propTypes.object),
}

SEO.defaultProps = {
  meta: [],
  description: "",
}

export default SEO
