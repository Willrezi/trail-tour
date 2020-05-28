import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"

export const query = graphql`
  query {
    tour: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Tours = ({ data }) => {
  return (
    <Layout>
      <Hero
        img={data.tour.childImageSharp.fluid}
        className="hero hero-min"
      ></Hero>
      <div className="tours">
        <h3 className="section-title">Nos balades</h3>
      </div>
    </Layout>
  )
}

export default Tours
