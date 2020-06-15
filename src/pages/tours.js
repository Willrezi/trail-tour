import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Img from "gatsby-image"
import SEO from "../components/seo"

const getTours = graphql`
  query {
    allTours: allContentfulToursData {
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
    tourHero: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Tours = () => {
  const data = useStaticQuery(getTours)
  const tours = data.allTours.edges

  return (
    <Layout>
      <SEO title="Nos balades" />
      <Hero
        img={data.tourHero.childImageSharp.fluid}
        className="hero hero-min"
      ></Hero>
      <div className="tours">
        <h3 className="section-title">Nos balades</h3>
        <div className="tours-container">
          <p className="tours-text">
            Venez randonner dans les Montagnes du Jura, prenez de l'altitude en
            sillonnant les sommets ou laissez vos pas vous porter au clapotis de
            l'eau... de nombreuses combinaisons s'offrent à vous dans de
            magnifiques paysages .... De la Source du Doubs au Château de Joux,
            du Lac de Saint Point au sommet du Mont d'Or, de la Source de la
            Loue à l'autre coté de la frontière, partez à la rencontre d'une
            faune, d'une flore et d'un patrimoine riches à pied, à VTT ou à
            cheval !{" "}
          </p>
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
      </div>
    </Layout>
  )
}

export default Tours
