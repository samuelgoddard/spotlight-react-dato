import React from "react"
import PropTypes from "prop-types"

import BackgroundImage from 'gatsby-background-image'

const Hero = ({ title, heroImage, phoneNumber, blurb }) => (

  <BackgroundImage
    Tag="div"
    className="m-hero"
    fluid={heroImage.childImageSharp.fluid}
  >
    <div className="container text-center">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-white font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight"
          dangerouslySetInnerHTML={{__html:title}}
        ></h1>
        <p
          className="text-lg lg:text-xl text-tertiary max-w-xl mx-auto mb-8"
          dangerouslySetInnerHTML={{__html:blurb}}
        ></p>

        <div className="m-hero__btns">
          <a href="#" className="btn block w-full">
            Get a <span className="font-bold">Callback</span>
          </a>
        </div>

        <div className="text-xl md:text-2xl text-white align-top mb-1">
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </div>
      </div>
    </div>
  </BackgroundImage>
)

Hero.propTypes = {
  title: PropTypes.string,
  blurb: PropTypes.string,
  heroImage: PropTypes.object,
  phoneNumber: PropTypes.string
}

Hero.defaultProps = {
  title: ``,
  blurb: ``,
  heroImage: ``,
  phoneNumber: ``
}

export default Hero