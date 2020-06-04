import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const getToursToDisplay = graphql`
  query {
    toursToDisplay: allContentfulToursData(
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
  const data = useStaticQuery(getToursToDisplay)
  const tours = data.toursToDisplay.edges
  console.log("data", tours)

  return (
    <section className="tours-section">
      <h3 className="section-title ">Quelques uns de nos parcours</h3>
      <div>
        <ul className="tours-list">
          {tours.map(({ node }) => {
            return (
              <li key={node.contentful_id}>
                <Link to={`/tours/${node.slug}`}>
                  <Image fluid={node.images[0].fluid} className="tours-image" />
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