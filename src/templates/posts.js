import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String) {
    contentfulToursData(slug: { eq: $slug }) {
      name
      description {
        json
      }
      tours {
        json
      }
      distance
      positiveElevation
      negativeElevation
      images {
        fluid(maxWidth: 200) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

const Posts = props => {
  const {
    name,
    distance,
    positiveElevation,
    negativeElevation,
    description,
    images,
    tours,
  } = props.data.contentfulToursData

  return (
    <Layout>
      <div className="post">
        <h3 className="section-title">{name}</h3>
        <div className="post-container">
          <div className="post-image-block">
            <Img fluid={images[0].fluid} alt={name} className="post-image" />
            <div className="post-infos">
              <article>{`Distance : ${distance} km`}</article>
              <article>{`Dénivelé positif : ${positiveElevation} m`}</article>
              <article>{`Dénivelé négatif : ${negativeElevation} m`}</article>
              <article className="post-link">
                {documentToReactComponents(tours.json)}
              </article>
            </div>
          </div>
          <div className="post-text">
            <article>{documentToReactComponents(description.json)}</article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Posts
