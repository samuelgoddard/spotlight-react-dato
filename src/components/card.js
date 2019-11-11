import React from "react"
import PropTypes from "prop-types"

const Card = ({ title, blurb, btn, icon }) => (
  <div className="bg-white shadow-lg py-8 lg:py-12 p-6 lg:p-8 text-center rounded relative z-10 h-full">
    {icon && (
      <span className="block mb-5">{icon}</span>
    )}
    <h2 className="text-lg lg:text-xl 2xl:text-2xl text-tertiary-dark font-display">{title}</h2>
    <p
      className="text-base"
      dangerouslySetInnerHTML={{__html:blurb}}
    ></p>
    {btn && (
      <a href="#callback" className="btn mt-3 text-base">Get a <strong>callback</strong></a>
    )}
  </div>
)

Card.propTypes = {
  title: PropTypes.string,
  blurb: PropTypes.string,
  btn: PropTypes.bool,
  icon: PropTypes.object,
}

Card.defaultProps = {
  title: ``,
  blurb: ``,
  btn: false,
  icon: ``
}

export default Card