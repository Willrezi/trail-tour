import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Offer from "../components/offer"
import SomeTours from "../components/some-tours"
import Newsletter from "../components/newsletter"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Accueil" />
      <Hero home="true" className="hero" img={data.main.childImageSharp.fluid}>
        <Banner />
      </Hero>
      <SomeTours />
      <Offer />
      <Newsletter />
    </Layout>
  )
}

export default IndexPage
