import React from "react"
import PropTypes from "prop-types"

const Usp = ({ title, icon }) => (
  <div className="bg-secondary-dark p-8 md:rounded text-white border-b border-tertiary-light md:border-none">
    <div className="flex flex-wrap items-center">
      <div className="mr-6">
        {icon}
      </div>
      <div className="flex-1">
        <span className="text-white text-lg leading-snug block" dangerouslySetInnerHTML={{__html:title}}></span>
      </div>
    </div>
  </div>
)

Usp.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
}

Usp.defaultProps = {
  title: ``,
  icon: ``
}

export default Usp