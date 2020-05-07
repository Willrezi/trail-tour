import React from "react"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ img, children, home, className }) => {
  return (
    <section>
      <BackgroundImage className={className} fluid={img} home={home}>
        {children}
      </BackgroundImage>
    </section>
  )
}

export default Hero
