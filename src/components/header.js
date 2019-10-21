import PropTypes from "prop-types"
import React from "react"

const Header = ({ location, phoneNumber }) => (
  <header className="bg-white">
    <div className="container py-6">
      <div className="flex flex-wrap">
        <span className="mr-auto" to="/">Windscreens Spotlight {location}</span>
        <p className="mb-0 mx-auto hidden lg:block">Reliable and hassle-free windscreen services in Location.</p>
        <a href={`tel:${phoneNumber}`} className="mb-0 ml-auto hidden md:block">{phoneNumber}</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  phoneNumber: PropTypes.string,
}

Header.defaultProps = {
  location: ``,
  phoneNumber: ``,
}

export default Header
