import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulToursData(
      filter: { displayHome: { eq: true } }
    ) {
      edges {
        node {
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          name
          distance
          positiveElevation
          negativeElevation
          contentful_id
          slug
        }
      }
    }
  }
`

const SomeTours = () => {
  const data = useStaticQuery(getFeaturedTours)
  const tours = data.featuredTours.edges

  return (
    <section className="tours-section">
      <h3 className="section-title ">Quelques uns de nos parcours</h3>
      <div className="tours-container">
        <ul className="tours-list">
          {tours.map(({ node }) => {
            return (
              <li key={node.contentful_id}>
                <Link to={`/tours/${node.slug}`}>
                  <Img fluid={node.images[0].fluid} className="tours-image" />
                  <p>{node.name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default SomeTours
