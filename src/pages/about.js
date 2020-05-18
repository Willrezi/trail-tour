import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getAbout)
  return (
    <Layout>
      <div className="about">
        <h3 className="section-title">A propos de nous</h3>
        <div className="about-container">
          <div className="about-img-container">
            <div className="about-img">
              <Img
                fluid={data.aboutImage.childImageSharp.fluid}
                alt="landscape"
              />
            </div>
          </div>
          <div className="about-text">
            <h4>Une autre façon de découvrir le Haut-Doubs</h4>
            <p>
              Ut molestie orci eget mi sodales auctor. Integer ultricies tellus
              diam, sit amet mollis urna hendrerit sit amet. Etiam sollicitudin
              ipsum nec justo luctus iaculis. Integer bibendum dolor hendrerit
              urna facilisis euismod. Suspendisse pretium nunc sed auctor
              rhoncus. Quisque ut sollicitudin ex. Proin ullamcorper vitae magna
              a consequat.
              <br />
              Quisque finibus velit lacus, sit amet malesuada mi feugiat in. Nam
              urna purus, vehicula id ipsum mollis, tincidunt sodales enim.
              Fusce sollicitudin erat et aliquet tempus. Vivamus semper posuere
              diam, vel convallis tortor consectetur vel. Aliquam viverra et
              metus in condimentum. Nunc sollicitudin molestie ligula, vitae
              tincidunt urna condimentum et. Suspendisse ornare, lorem et tempor
              dapibus, justo tortor commodo tortor, vel consequat massa ex in
              ante. Pellentesque efficitur ex a metus tempor consequat. In metus
              felis, pretium a vulputate nec, condimentum quis elit. Cras mattis
              porttitor nibh, id dignissim libero ultrices in. Fusce justo nibh,
              dictum in mattis id, lobortis et lacus.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
