import React from "react"
import PropTypes from "prop-types"
import "../styles/main.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faAngleRight, faAngleLeft, faClock, faTruck, faCoffee, faThumbsUp, faCheckSquare, faNewspaper, faPhoneAlt, faStar } from "@fortawesome/free-solid-svg-icons"

library.add(faCheck, faAngleRight, faAngleLeft, faClock, faTruck, faCoffee, faThumbsUp, faCheckSquare, faNewspaper, faPhoneAlt, faStar)

const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
